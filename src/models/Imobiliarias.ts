import { 
  Entity, Column, PrimaryGeneratedColumn, 
  ManyToOne, JoinColumn, CreateDateColumn, 
  UpdateDateColumn, 
} from 'typeorm';

import Casas from './Casas';

@Entity('imobiliarias')
class Imobiliaria {
  @PrimaryGeneratedColumn('uuid')
  id: String;

  @Column()
  nome: String;

  @Column()
  contato: String;

  @Column()
  telefone: String;

  @Column()
  email: String;

  @ManyToOne(() => Casas)
  @JoinColumn({ name: 'nome_id' })
  nome_id: String;
 
  @CreateDateColumn()
  created_at: Date; 

  @UpdateDateColumn()
  updated_at: Date;
}

export default Imobiliaria;