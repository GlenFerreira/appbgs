import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { supabase } from './supabaseClient.js';
import { createClient } from '@supabase/supabase-js'
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

export const base = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);



dotenv.config();
const app = express();

// Configuração para servir arquivos estáticos
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());
app.use(cors());

// Servir arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, '../frontend')));


app.get('/confirmarUser', (req, res) => {

    async function getUsers() {

        // console.log(req.query.email_usuario);
        // console.log(req.query.senha_usuario);
        // Requisição GET usando o Supabase
        const { data, error } = await supabase
            .from('admin_table')  // nome da tabela
            .select("admin_id, admin_name")
            .eq('admin_name', req.query.nome_usuario)
            .eq('admin_password', req.query.senha_usuario) 

        if (error) {
            console.error('Erro ao buscar usuários:', error);
        } else {

            if (data[0]){

                res.send(data[0])
                console.log(data[0])

            } else {
                console.log('Não tem nenhum registro!')
                res.send('Nome ou senha errados!')
            }
        }
    }

    // Chama a função
    getUsers();
});



/*Inserir novos usuários e garantir que eles serão referenciados por uma FK:*/


app.post('/criarContatos', (req, res) => {


    console.log(req.body)


    async function criarContato() {
    try {
        const novoContato = req.body;

        const { data, error } = await supabase
        .from('new_contacts')
        .insert([novoContato])   // sempre array de objetos
        .select();               // retorna o registro inserido

        if (error) throw error;

        console.log('Contato criado:', data[0]);
    } catch (err) {
        console.error('Erro ao criar contato:', err.message);
    }
    }

    criarContato();


//   res.send('Got a POST request')
//   console.log('Tudo certo por aqui')
//   console.log(req.body);
//   res.json({sucess:true});
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});