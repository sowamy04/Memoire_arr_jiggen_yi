<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210221004057 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE quartier ADD villes_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE quartier ADD CONSTRAINT FK_FEE8962D286C17BC FOREIGN KEY (villes_id) REFERENCES ville (id)');
        $this->addSql('CREATE INDEX IDX_FEE8962D286C17BC ON quartier (villes_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE quartier DROP FOREIGN KEY FK_FEE8962D286C17BC');
        $this->addSql('DROP INDEX IDX_FEE8962D286C17BC ON quartier');
        $this->addSql('ALTER TABLE quartier DROP villes_id');
    }
}
