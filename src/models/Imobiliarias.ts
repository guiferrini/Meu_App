import { 
  Entity, Column, PrimaryGeneratedColumn, 
  ManyToOne, JoinColumn, CreateDateColumn, 
  UpdateDateColumn, 
} from 'typeorm';

import Casa from './Casas';

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

  // mtos imobiliaraias p 1 casa
  @ManyToOne(() => Casa)
  // Uma função q retorna qual é o model q deve utilizar qdo a variavel for chamada
  @JoinColumn({ name: 'nome_id' })
  // Qual coluna vai identificar qual q eh o usuario do agendamento
  casa: Casa

  @Column()
  nome_id: String;
 
  @CreateDateColumn()
  created_at: Date; 

  @UpdateDateColumn()
  updated_at: Date;
}

export default Imobiliaria;