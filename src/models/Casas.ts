import { 
  Entity, PrimaryGeneratedColumn, Column,
  CreateDateColumn, UpdateDateColumn, 
} from 'typeorm';


@Entity('casas')
class Casa {
  @PrimaryGeneratedColumn('uuid')
  id: String;

  @Column()
  endereco: String;

  @Column()
  inquilino: String;

  @Column()
  inicio: Date;

  @Column()
  fim: Date;

  @Column('decimal')
  valor: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Casa;