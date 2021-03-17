<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\SuperAdminRepository;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @ORM\Entity(repositoryClass=SuperAdminRepository::class)
 * @ApiResource(
 *  
 * )
 */
class SuperAdmin extends User
{
    
}
