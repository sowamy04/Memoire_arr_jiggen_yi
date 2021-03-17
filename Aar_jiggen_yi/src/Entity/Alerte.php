<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\AlerteRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=AlerteRepository::class)
 * @ApiResource(
 *   attributes={ 
 *  "input_formats"={
 *    "json"={"application/ld+json", "application/json"}
 *  }, 
 *  "output_formats"={
 *      "json"={"application/ld+json", "application/json"}
 *  } 
 * },
 *  collectionOperations ={
 *  "get"= {
 *    "normalization_context"={"groups":"alerte:read"},
 *    "access_control"="(is_granted('ROLE_SUPER_ADMIN') or is_granted('ROLE_ADMIN'))",
 *    "access_control_message"="Vous n'avez pas access à cette Ressource"
 *   },
 * "lister_alertes" = {
 *    "method": "GET",
 *    "path": "simple_users/alertes", 
 *    "normalization_context"={"groups":"alerte:read"},
 *    "access_control"="(is_granted('ROLE_SUPER_ADMIN') or is_granted('ROLE_ADMIN'))",
 *    "access_control_message"="Vous n'avez pas access à cette Ressource"
 * },
 * "add_alerte" = {
 *    "method": "POST",
 *   "path": "/simple_users/alertes", 
 *   "normalization_context"={"groups":"alerte:read"},
 *   "access_control"="(is_granted('ROLE_USER'))",
 *   "access_control_message"="Vous n'avez pas access à cetteThe Ressource",
 *   "route_name"="ajouter_alerte",
 * },
 * },
 * itemOperations= {
 *  "get_alerte" = {
 *    "method": "GET",
 *   "path": "/simple_users/alertes/{id}",
 *   "normalization_context"={"groups":"alerte:read"},
 *   "access_control"="(is_granted('ROLE_USER') or is_granted('ROLE_ADMIN') or is_granted('ROLE_SUPER_ADMIN'))",
 *   "access_control_message"="Vous n'avez pas access à cette Ressource"
 *  },
 * }
 * )
 */
class Alerte
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"alerte:read", "simple_user:read"})
     */
    private $id;

    /**
     * @ORM\Column(type="date")
     * @Groups({"alerte:read", "simple_user:read"})
     */
    private $date;

    /**
     * @ORM\ManyToOne(targetEntity=PersonneConfiance::class, inversedBy="alertes")
     * @Groups({"alerte:read"})
     */
    private $meritoire;

    /**
     * @ORM\ManyToOne(targetEntity=SimpleUser::class, inversedBy="alertes")
     * @Groups({"alerte:read"})
     */
    private $user;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getMeritoire(): ?PersonneConfiance
    {
        return $this->meritoire;
    }

    public function setMeritoire(?PersonneConfiance $meritoire): self
    {
        $this->meritoire = $meritoire;

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
