<?php

namespace App\Controller;

use App\Entity\Itineraire;
use App\Entity\Itineraires;
use App\Entity\SimpleUser;
use App\Repository\SimpleUserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

class ItineraireController extends AbstractController 
{       
     /**
     * @Route(
     *  "/api/simple_users/itineraires", 
     *  name="add_itineraire", 
     *  methods={"POST"},
     *  defaults={
     *      "_controller"="\app\ControllerItineraireController::ajouter_itinérarire",
     *      "_api_resource_class"=Itineraire::class,
     *      "_api_collection_operation_name"="add_itineraire"
     *  }
     * )
     */
    public function ajouter_itinérarire(Request $request, TokenStorageInterface $tokenStorage)
    {
        //dd("ok");
        $req = $request->getContent();
        $requete = json_decode($req);
        $em = $this->getDoctrine()->getManager();
        $user = $tokenStorage->getToken()->getUser();
        //dd($user);
        $itineraire = new Itineraire();
        $depart = $requete->depart;
        $arrivee = $requete->arrivee;
        $date = new \DateTime();
        //dd($date);
        $itineraire
            ->setUser($user)
            ->setDepart($depart)
            ->setArrivee($arrivee)
            ->setDate($date)
            ;
        
        $em->persist($itineraire);
        $em->flush();
        return new JsonResponse('Itinéraire ajouté avec succès');
    }
}
