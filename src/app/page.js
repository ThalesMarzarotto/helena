
import Image from "next/image";
import styles from "./page.module.css";





export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.contentWrapper}>

        <div className={styles.textWrapper}>
            <div className={styles.textTitle}>
              <span className={styles.textPink}>Desvendando a Depressão com o DSM-5-TR</span>
      
            </div>
            <div className={styles.textContent}>
                <span>
                    Cada vez mais profissionais de saúde estão se formando sem dominar o básico a respeito de diagnósticos psiquiátricos e isso é grave! 
                </span>

                <span>
                  A depressão, por exemplo, afeta quase 300 milhões de pessoas no mundo e muitos profissionais não sabem identificá-la no contexto clínico. 

                </span>
          
                <span>
                Pensando nisso, elaborei esse curso onde analisaremos os critérios clínicos que configuram todos os tipos de Depressão, a partir do DSM-5-TR, o guia de psicopatologia descritiva mais atualizado.
                </span>
          
            </div>
        </div>

        <div className={styles.imageWrapper}>
          <img src="/Helena.png">
          
          </img>
        </div>
      
      </div>
     
     <div className={styles.strip}>
         
         
         <div className={styles.stripContent}>
         Curso direcionado para psiquiatras e psicólogos • Curso direcionado para psiquiatras e psicólogos • Curso direcionado para psiquiatras e psicólogos • Curso direcionado para psiquiatras e psicólogos •  Curso direcionado para psiquiatras e psicólogos •
         
         </div>
     </div>


     <div className={styles.contentWrapper3}>

        <div className={styles.textWrapper2}>
            <div className={styles.textTitle2}>
             <span >Objetivos</span>
    
            </div>
            <div className={styles.textContent2}>
            O objetivo é que, no final do curso, você consiga:
            </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.gridContent}>
             <div className={styles.gridSvg}>
             <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="53px" width="53px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M5 5h2v3h10V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H5V5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"></path><path d="M20.3 18.9c.4-.7.7-1.5.7-2.4 0-2.5-2-4.5-4.5-4.5S12 14 12 16.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l2.7 2.7 1.4-1.4-2.7-2.7zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z"></path></svg>
             </div>
             <div className={styles.gridTitle}>
               Identificar
             </div>
             <div className={styles.gridText}>

             
             Identificar os critérios que configuram todos os tipos de depressão segundo o DSM-5 TR
      

             </div>
            
          
          </div>
        
          <div className={styles.gridContent}>
             <div className={styles.gridSvg}>
             <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="53px" width="53px" xmlns="http://www.w3.org/2000/svg"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
             </div>
             <div className={styles.gridTitle}>
              Distinguir
             </div>
             <div className={styles.gridText}>

             Distinguir a depressão de possíveis outras condições médicas, de forma a realizar o diagnóstico diferencial correto

             </div>
            
          
          </div>
        
          <div className={styles.gridContent}>
             <div className={styles.gridSvg}>
             <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="53px" width="53px" xmlns="http://www.w3.org/2000/svg"><path d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"></path></svg>
             </div>
             <div className={styles.gridTitle}>
               Perguntas
             </div>
             <div className={styles.gridText}>

             
             Aprenda a fazer as melhores perguntas clínicas para o seu paciente, com objetivo de concluir o diagnóstico
             </div>
            
          
          </div>
        
          <div className={styles.gridContent}>
             <div className={styles.gridSvg}>
             <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="53px" width="53px" xmlns="http://www.w3.org/2000/svg"><path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"></path><path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"></path></svg>
             </div>
             <div className={styles.gridTitle}>
               Confiança
             </div>
             <div className={styles.gridText}>

             
     Se sentir seguro na prática clínica, tendo mais confiança e assertividade para realizar o diagnóstico 

             </div>
            
          
          </div>
          <div className={styles.gridContent}>
             <div className={styles.gridSvg}>
             <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="53px" width="53px" xmlns="http://www.w3.org/2000/svg"><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 7a5 5 0 1 0 5 5"></path><path d="M13 3.055a9 9 0 1 0 7.941 7.945"></path><path d="M15 6v3h3l3 -3h-3v-3z"></path><path d="M15 9l-3 3"></path></svg>
             </div>
             <div className={styles.gridTitle}>
               Tratamento
             </div>
             <div className={styles.gridText}>

             
             
Direcionar corretamente o tratamento para o seu paciente, considerando suas necessidades específicas, histórico clínico detalhado, preferências individuais e respeitando os princípios éticos da prática clínica 

             </div>
            
          
          </div>
          <div className={styles.gridContent}>
             <div className={styles.gridSvg}>
               
             <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="53px" width="53px" xmlns="http://www.w3.org/2000/svg"><path d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"></path></svg>
             </div>
             <div className={styles.gridTitle}>
               Reconhecimento
             </div>
             <div className={styles.gridText}>

             

             Ter a oportunidade de expandir sua clientela e lista de espera, alcançando reconhecimento profissional e se tornando uma autoridade em sua área
             </div>
            
          
          </div>
       
          <div className={styles.gridContent}>
             <div className={styles.gridSvg}>
               
             <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="53px" width="53px" xmlns="http://www.w3.org/2000/svg"><path d="M244.24,60a8,8,0,0,0-7.75-.4c-42.93,21-73.59,11.16-106,.78C96.4,49.53,61.2,38.28,12.49,62.06A8,8,0,0,0,8,69.24V189.17a8,8,0,0,0,11.51,7.19c42.93-21,73.59-11.16,106.05-.78,19.24,6.15,38.84,12.42,61,12.42,17.09,0,35.73-3.72,56.91-14.06a8,8,0,0,0,4.49-7.18V66.83A8,8,0,0,0,244.24,60ZM48,152a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm80,8a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm96,8a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>
             </div>
             <div className={styles.gridTitle}>
               Ganhos
             </div>
             <div className={styles.gridText}>

             

             Aumento significativo nos ganhos financeiros devido aos resultados positivos proporcionados aos pacientes.
             </div>
            
          
          </div>
       
        
        </div>


         
     </div>






     <div className={styles.contentWrapper2}>


     
      <div className={styles.textWrapper2}>
          <div className={styles.textTitle}>
            <span className={styles.textPink}>Vantagens de adquirir o curso </span>
       
          </div>
          <div className={styles.textContent}>
          Aprenda técnicas avançadas para refinar seu diagnóstico, intensificar a adesão ao tratamento e alcançar resultados significativos para seus pacientes com segurança e utilizando as melhores evidências científicas.
    
          <span> 
          O curso apresenta uma metodologia de estudo flexível e eficiente, desenvolvida para facilitar o aprendizado e a fixação do conteúdo. Com opções que permitem adiantar as aulas e ajustar a velocidade para revisões rápidas, você pode personalizar seu processo de estudo de acordo com seu ritmo e disponibilidade. Pensando em otimizar a absorção das informações, nossa metodologia inclui uma estrutura de estudo segmentada, garantindo que você maximize sua compreensão e retenção do material ensinado.



          </span>

          <span> 
          Esta é uma oportunidade única para você se tornar o profissional qualificado e capacitado que sempre quis ser, mas não sabia como.




          </span>
          <span> 
         
Portanto, se você se sente perdido, sem saber como diagnosticar os transtornos mais comuns na prática clínica, estou aqui para te ajudar! No meu curso, eu vou responder suas dúvidas sobre esse assunto e essa será sua chance de entender, de uma vez por todas, quais são os critérios clínicos que configuram a depressão e todos os seus subtipos.


          </span>




          </div>
      </div>


      <a  href={'https://pay.kiwify.com.br/hRQkiue'} className={styles.button}>
        CLIQUE AQUI E ADQUIRA AGORA
        
        <span> Desconto de 30% por tempo limitado
          </span>

      </a>

    
      </div> 
     


    </main>
  );
}
