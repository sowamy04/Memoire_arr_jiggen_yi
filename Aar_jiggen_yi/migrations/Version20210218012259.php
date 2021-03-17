<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210218012259 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE organe (id INT AUTO_INCREMENT NOT NULL, ville_id INT DEFAULT NULL, nom_organe VARCHAR(255) NOT NULL, INDEX IDX_E23012D0A73F0036 (ville_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ville (id INT AUTO_INCREMENT NOT NULL, departement_id INT DEFAULT NULL, nom_ville VARCHAR(255) NOT NULL, INDEX IDX_43C3D9C3CCF9E01E (departement_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE organe ADD CONSTRAINT FK_E23012D0A73F0036 FOREIGN KEY (ville_id) REFERENCES ville (id)');
        $this->addSql('ALTER TABLE ville ADD CONSTRAINT FK_43C3D9C3CCF9E01E FOREIGN KEY (departement_id) REFERENCES departement (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE organe DROP FOREIGN KEY FK_E23012D0A73F0036');
        $this->addSql('DROP TABLE organe');
        $this->addSql('DROP TABLE ville');
    }
}
