<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\ItineraireRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=ItineraireRepository::class)
 * @ApiResource(
 *  attributes={ 
 *  "input_formats"={
 *    "json"={"application/ld+json", "application/json"}
 *  }, 
 *  "output_formats"={
 *      "json"={"application/ld+json", "application/json"}
 *  } 
 * },
 *  collectionOperations ={
 *  "get"= {
 *    "normalization_context"={"groups":"itineraire:read"},
 *    "access_control"="(is_granted('ROLE_SUPER_ADMIN'))",
 *    "access_control_message"="Vous n'avez pas access à cette Ressource"
 *   },
 * "lister_itineraires" = {
 *    "method": "GET",
 *    "path": "simple_users/itineraires", 
 *    "normalization_context"={"groups":"itineraire:read"},
 *    "access_control"="(is_granted('ROLE_SUPER_ADMIN'))",
 *    "access_control_message"="Vous n'avez pas access à cette Ressource"
 * },
 * "add_itineraire" = {
 *    "method": "POST",
 *   "path": "/simple_users/itineraires", 
 *   "normalization_context"={"groups":"itineraire:read"},
 *   "access_control"="(is_granted('ROLE_USER'))",
 *   "access_control_message"="Vous n'avez pas access à cetteThe Ressource",
 *   "route_name"="add_itineraire",
 * },
 * },
 * itemOperations= {
 *  "get_itineraire" = {
 *    "method": "GET",
 *   "path": "/simple_users/itineraires/{id}",
 *   "normalization_context"={"groups":"itineraire:read"},
 *   "access_control"="(is_granted('ROLE_USER') or is_granted('ROLE_ADMIN') or is_granted('ROLE_SUPER_ADMIN'))",
 *   "access_control_message"="Vous n'avez pas access à cette Ressource"
 *  },
 * }
 * )
 */
class Itineraire
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"itineraire:read", "simple_user:read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"itineraire:read", "simple_user:read"})
     */
    private $depart;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"itineraire:read", "simple_user:read"})
     */
    private $arrivee;

    /**
     * @ORM\Column(type="date")
     * @Groups({"itineraire:read", "simple_user:read"})
     */
    private $date;

    /**
     * @ORM\ManyToOne(targetEntity=SimpleUser::class, inversedBy="itineraires")
     * @Groups({"itineraire:read"})
     */
    private $user;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDepart(): ?string
    {
        return $this->depart;
    }

    public function setDepart(string $depart): self
    {
        $this->depart = $depart;

        return $this;
    }

    public function getArrivee(): ?string
    {
        return $this->arrivee;
    }

    public function setArrivee(string $arrivee): self
    {
        $this->arrivee = $arrivee;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getUser(): ?SimpleUser
    {
        return $this->user;
    }

    public function setUser(?SimpleUser $user): self
    {
        $this->user = $user;

        return $this;
    }
}