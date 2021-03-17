<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210221002445 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE avis DROP FOREIGN KEY FK_8F91ABF0A73F0036');
        $this->addSql('DROP INDEX IDX_8F91ABF0A73F0036 ON avis');
        $this->addSql('ALTER TABLE avis DROP ville_id');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE avis ADD ville_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE avis ADD CONSTRAINT FK_8F91ABF0A73F0036 FOREIGN KEY (ville_id) REFERENCES ville (id)');
        $this->addSql('CREATE INDEX IDX_8F91ABF0A73F0036 ON avis (ville_id)');
    }
}
