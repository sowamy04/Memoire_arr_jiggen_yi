<?php

namespace App\Controller;

use App\Entity\Alerte;
use App\Entity\PersonneConfiance;
use App\Repository\AlerteRepository;
use App\Repository\MeritoireRepository;
use App\Repository\PersonneConfianceRepository;
use App\Repository\SimpleUserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

class AlerteController extends AbstractController
{
    /**
     * @Route(
     *  "/api/simple_users/meritoires/alertes", 
     *  name="add_alerte", 
     *  methods={"POST"},
     *  defaults={
     *      "_controller"="\app\ControllerAlerteController::ajouter_alerte",
     *      "_api_resource_class"=Alerte::class,
     *      "_api_collection_operation_name"="add_alerte"
     *  }
     * )
     */
    public function ajouter_alerte(Request $request, PersonneConfianceRepository $merRepo, TokenStorageInterface $tokenStorage)
    {
            $req = $request->getContent();
            $requete = json_decode($req);
            $em = $this->getDoctrine()->getManager();
            $user = $tokenStorage->getToken()->getUser();
            $meritoires = $merRepo->findAll();
            foreach ($meritoires as $key => $meritoire) {
                if ($meritoire->getId() == (int)$requete->meritoires) {
                    $alerte = new Alerte();
                    $date = new \DateTime();
                    $alerte
                        ->setUser($user)
                        ->setDate($date)
                        ->setMeritoire($meritoire)
                        ;
                    
                    $em->persist($alerte);
                    $em->flush();
                    return new JsonResponse('alerte enregistrée avec succès');
                }
            }
        
    }
}
