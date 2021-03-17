<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210218014701 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE alerte (id INT AUTO_INCREMENT NOT NULL, meritoire_id INT DEFAULT NULL, user_id INT DEFAULT NULL, date DATE NOT NULL, INDEX IDX_3AE753A8222A6E1 (meritoire_id), INDEX IDX_3AE753AA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE alerte ADD CONSTRAINT FK_3AE753A8222A6E1 FOREIGN KEY (meritoire_id) REFERENCES personne_confiance (id)');
        $this->addSql('ALTER TABLE alerte ADD CONSTRAINT FK_3AE753AA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE alerte');
    }
}
