<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210218012748 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE personne_confiance (id INT AUTO_INCREMENT NOT NULL, simple_user_id INT DEFAULT NULL, nom_complet VARCHAR(255) NOT NULL, telephone VARCHAR(255) NOT NULL, statut TINYINT(1) NOT NULL, INDEX IDX_AF8469FAED27CD6E (simple_user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE personne_confiance ADD CONSTRAINT FK_AF8469FAED27CD6E FOREIGN KEY (simple_user_id) REFERENCES user (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE personne_confiance');
    }
}
