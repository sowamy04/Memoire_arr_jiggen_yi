<?php

namespace App\Controller;

use App\Entity\Admin;
use App\Entity\Profil;
use App\Entity\SimpleUser;
use App\Repository\AdminRepository;
use App\Repository\ProfilRepository;
use App\Repository\SimpleUserRepository;
use App\Repository\UserRepository;
use App\Service\UserService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Serializer\Normalizer\DenormalizerInterface;

class ApiController extends AbstractController
{
    public function __construct(UserPasswordEncoderInterface $encoder, DenormalizerInterface $denormalize, 
    EntityManagerInterface $manager, ProfilRepository $profilRepository,
    SimpleUserRepository $simpleUserRepo, \Swift_Mailer $mailer, UserService $userService)
    {
        $this->dn = $denormalize;
        $this->encode = $encoder;
        $this->manage = $manager;
        $this->profilRepository = $profilRepository;
        $this->simpleUserRepo = $simpleUserRepo;
        $this->swift= $mailer;
        $this->userService = $userService;
    }

    public function sendMail($mail,  $password){
        $message = (new \Swift_Message('Aar Jiggen'))
                ->setFrom('amysow0495@gmail.com')
                ->setTo($mail)
                ->setBody(
                    $this->renderView(
                        'api/index.html.twig',
                        [
                            'mail'=> $mail,
                            'password'=>$password
                        ]
                        ),
                        'text/html'
        );
        $this->swift->send($message);
    }

    /**
     * @Route(
     * "api/super_admin/admins", 
     * name="ajouter_admin", 
     * methods={"POST"},
     * defaults={
     *      "_controller"="\app\ControllerApiController::ajouter_un_admin",
     *      "_api_resource_class"=Admin::class,
     *      "_api_collection_operation_name"="add_admin"
     *  }
     * )
     */
    public function ajouter_un_admin(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $requete = $request->request->all();
        $photo= $request->files->get('photo');
        $password = $requete['password'];
        $telephone = $requete['telephone'];
        $email = $requete['email'];
        if ($photo) {
            $photo= fopen($photo->getRealPath(),"rb");
        }
        $profilTab = $this->getDoctrine()->getRepository(Profil::class)->findAll();
        foreach ($profilTab as $profil) {
            if($profil->getLibelle() == "ADMIN"){
                $requete = $this->dn->denormalize($requete, Admin::class);
                $requete->setFirstConnexion(true)
                        ->setPassword($this->encode->encodePassword($requete, $password))
                        ->setProfil($profil)
                        ->setUsername($telephone)
                ;
                $requete->setStatut(true);
                $requete->setPhoto($photo);
                $em->persist($requete);
                $em->flush();
                $this->sendMail($email, $password);
                return new JsonResponse("Admin ajouté avec succès!");
            }
        } 
    }

    /**
     * @Route(
     * "api/super_admin/admins/{id}", 
     * name="update_admin", 
     * methods={"PUT"},
     * defaults={
     *      "_controller"="\app\ControllerApiController::modifier_admin",
     *      "_api_resource_class"=Admin::class,
     *      "_api_collection_operation_name"="put_admin"
     *  }
     * )
     */
    public function modifier_admin($id, Request $request, AdminRepository $adminRepo)
    {
        $admin = $adminRepo->findOneBy(["id"=>$id]);
        $req = $request->getContent();
        $requete = json_decode($req);
        $em = $this->getDoctrine()->getManager();
        $prenom = $requete->prenom;
        $nom = $requete->nom;
        $telephone = $requete->telephone;
        $email = $requete->email;
        $password = $requete->password;
        
        $admin
            ->setFirstConnexion(false)
            ->setPassword($this->encode->encodePassword($admin, $password))
            ->setPrenom($prenom)
            ->setNom($nom)
            ->setTelephone($telephone)
            ->setEmail($email)
            ->setStatut(true)
            ;

        $em->flush();

        return new JsonResponse('Vous avez modifié vos informations avec succès'); 
    }

    /**
     * @Route(
     * "api/simple_users", 
     * name="ajouter_simple_user", 
     * methods={"POST"},
     * defaults={
     *      "_controller"="\app\ControllerApiController::ajouter_simple_user",
     *      "_api_resource_class"=SimpleUser::class,
     *      "_api_collection_operation_name"="add_simple_user"
     *  }
     * )
     */
    public function ajouter_simple_user(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $requete = $request->request->all();
        $photo= $request->files->get('photo');
        $password = $requete['password'];
        $telephone = $requete['telephone'];
        if ($photo) {
            $photo= fopen($photo->getRealPath(),"rb");
        }
        $profilTab = $this->getDoctrine()->getRepository(Profil::class)->findAll();
        foreach ($profilTab as $profil) {
            if($profil->getLibelle() == "USER"){
                $requete = $this->dn->denormalize($requete, SimpleUser::class);
                $requete->setPassword($this->encode->encodePassword($requete, $password))
                        ->setProfil($profil)
                        ->setUsername($telephone)
                ;
                $requete->setStatut(true);
                $requete->setPhoto($photo);
                $em->persist($requete);
                $em->flush();
                return new JsonResponse("Utilisateur inscrit avec succès!");
            }
        }  
    }

    /**
     * @Route(
     * "api/simple_users/{id}", 
     * name="update_simple_user", 
     * methods={"PUT"},
     * defaults={
     *      "_controller"="\app\ControllerApiController::modifier_simple_user",
     *      "_api_resource_class"=SimpleUser::class,
     *      "_api_collection_operation_name"="put_simple_user"
     *  }
     * )
     * @param Request $request
     */
    public function modifier_simple_user($id,Request $request, SimpleUserRepository $simpleUserRepo)
    {
        $simpleUser = $simpleUserRepo->findOneBy(["id"=>$id]);
        $req = $request->getContent();
        $requete = json_decode($req);
        $em = $this->getDoctrine()->getManager();
        $prenom = $requete->prenom;
        $nom = $requete->nom;
        $adresse = $requete->adresse;
        $sexe = $requete->sexe;
        $telephone = $requete->telephone;
        $email = $requete->email;
        $password = $requete->password;
        
        $simpleUser
            ->setAdresse($adresse)
            ->setSexe($sexe)
            ->setPassword($this->encode->encodePassword($simpleUser, $password))
            ->setPrenom($prenom)
            ->setNom($nom)
            ->setTelephone($telephone)
            ->setEmail($email)
            ->setStatut(true)
            ;

        $em->flush();

        return new JsonResponse('Vous avez modifié vos informations avec succès');
    }
}
