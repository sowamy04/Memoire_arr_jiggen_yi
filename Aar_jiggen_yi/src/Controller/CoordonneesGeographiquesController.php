<?php

namespace App\Controller;

use App\Entity\CoordonneesGeographiques;
use App\Repository\CoordonneesGeographiquesRepository;
use App\Repository\SimpleUserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;

class CoordonneesGeographiquesController extends AbstractController
{
    /**
     * @Route(
     *  "/api/simple_users/coordonnees_geographiques", 
     *  name="add_coordonnees", 
     *  methods={"POST"},
     *  defaults={
     *      "_controller"="\app\ControllerCoordonneesGeographiquesController::ajouter_coordonnees",
     *      "_api_resource_class"=CoordonneesGeographiques::class,
     *      "_api_collection_operation_name"="add_coordonnees"
     *  }
     * )
     */
    public function ajouter_coordonnees(Request $request, TokenStorageInterface $tokenStorage)
    {
        $req = $request->getContent();
        $requete = json_decode($req);
        $em = $this->getDoctrine()->getManager();
        $user = $tokenStorage->getToken()->getUser();
        $coordonnees = new CoordonneesGeographiques();
        $lat = $requete->lattitude;
        $long = $requete->longitude;
        $date = new \DateTime();
        $coordonnees
            ->setUser($user)
            ->setLatitude($lat)
            ->setLongitude($long)
            ->setDate($date)
            ;
        
        $em->persist($coordonnees);
        $em->flush();
        return new JsonResponse('Coordonnées enregistrées avec succès');
    }
}
