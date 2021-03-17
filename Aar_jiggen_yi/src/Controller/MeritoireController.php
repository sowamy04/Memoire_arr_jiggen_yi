<?php

namespace App\Controller;

use App\Entity\PersonneConfiance;
use App\Repository\SimpleUserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

class MeritoireController extends AbstractController
{
    /**
     * @Route(
     *  "/api/simple_users/personne_confiances", 
     *  name="add_meritoire", 
     *  methods={"POST"},
     *  defaults={
     *      "_controller"="\app\ControllerPersonneConfianceController::ajouter_itinérarire",
     *      "_api_resource_class"=PersonneConfiance::class,
     *      "_api_collection_operation_name"="add_meritoire"
     *  }
     * )
     */
    public function ajouter_meritoire(Request $request, TokenStorageInterface $tokenStorage)
    {
        $req = $request->getContent();
        $requete = json_decode($req);
        $em = $this->getDoctrine()->getManager();
        $user = $tokenStorage->getToken()->getUser();
        $meritoire = new PersonneConfiance();
        $nom = $requete->nomComplet;
        $tel = $requete->telephone;
        $meritoire
            ->setSimpleUser($user)
            ->setNomComplet($nom)
            ->setTelephone($tel)
            ->setStatut(true)
            ->setDate( new \DateTime())
            ;
        
        $em->persist($meritoire);
        $em->flush();
        return new JsonResponse('Méritoire ajouté avec succès');
    }
}
