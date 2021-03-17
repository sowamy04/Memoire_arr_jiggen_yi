<?php

namespace App\Controller;

use App\Entity\Quartier;
use App\Repository\QuartierRepository;
use App\Repository\VilleRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class QuartierController extends AbstractController
{
    /**
     * @Route(
     *  "/api/villes/quartiers", 
     *  name="add_quartier", 
     *  methods={"POST"},
     *  defaults={
     *      "_controller"="\app\ControllerQuartierController::ajouter_quartier",
     *      "_api_resource_class"=Quartier::class,
     *      "_api_collection_operation_name"="add_quartier"
     *  }
     * )
     */
    public function ajouter_quartier(VilleRepository $villeRepo, Request $request){
        $req = $request->getContent();
        $requete = json_decode($req);
        $em = $this->getDoctrine()->getManager();
        $quartier = new Quartier();
        $nomQuartier = $requete->nomQuartier;   
        $villes = $villeRepo->findAll();
        foreach ($villes as $ville) {
            if ($ville->getId() == (int)$requete->ville) {
                $quartier->setVilles($ville)
                     ->setNomQuartier($nomQuartier)
                     ->setStatut(true)
                ;

            $em->persist($quartier);
            $em->flush();

            return new JsonResponse('quartier ajoutée avec succès');
            }
        }
    }

     /**
     * @Route(
     *  "/api/villes/quartiers/{id}", 
     *  name="update_quartier", 
     *  methods={"PUT"},
     *  defaults={
     *      "_controller"="\app\ControllerQuartierController::modifier_quartier",
     *      "_api_resource_class"=Quartier::class,
     *      "_api_collection_operation_name"="put_quartier"
     *  }
     * )
     */
    public function modifier_quartier(int $id, QuartierRepository $quartierRepo, VilleRepository $villeRepo, Request $request){
        $quartier = $quartierRepo->findOneBy(["id"=>$id]);
        if(!empty($quartier)){
            $req = $request->getContent();
            $requete = json_decode($req);
            $em = $this->getDoctrine()->getManager();
            $nomQuartier = $requete->nomQuartier;
            $villes = $villeRepo->findAll();
            foreach ($villes as $ville) {
                if ($ville->getId() == (int)$requete->ville) {
                    $quartier->setVilles($ville)
                            ->setNomQuartier($nomQuartier)
                            ->setStatut(true)
                        ;
                    $em->flush();
                    return new JsonResponse('Quartier modifié avec succès');
                    
                }
            }    
        }
    }
}
