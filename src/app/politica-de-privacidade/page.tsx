import ContactSection from '@/components/sections/ContactSection';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Seja Hoop</title>
        <meta name='description' content='Quem somos?' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, viewport-fit=cover'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex min-h-screen items-center justify-center'>
        <div className='pt-36 px-4  text-justify'>
          <h2 className='text-4xl mb-8'>Política Privacidade</h2>
          <p>
            <span>
              A sua privacidade é importante para nós. É política do Hoop Bank
              respeitar a sua privacidade em relação a qualquer informação sua
              que possamos coletar no site{' '}
              <a href='https://www.sejahoop.com.br/'>Hoop Bank</a>, e outros
              sites que possuímos e operamos.
            </span>
          </p>
          <p>
            <span>
              Solicitamos informações pessoais apenas quando realmente
              precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios
              justos e legais, com o seu conhecimento e consentimento. Também
              informamos por que estamos coletando e como será usado.
            </span>
          </p>
          <p>
            <span>
              Apenas retemos as informações coletadas pelo tempo necessário para
              fornecer o serviço solicitado. Quando armazenamos dados,
              protegemos dentro de meios comercialmente aceitáveis ​​para evitar
              perdas e roubos, bem como acesso, divulgação, cópia, uso ou
              modificação não autorizados.
            </span>
          </p>
          <p>
            <span>
              Não compartilhamos informações de identificação pessoal
              publicamente ou com terceiros, exceto quando exigido por lei.
            </span>
          </p>
          <p>
            <span>
              O nosso site pode ter links para sites externos que não são
              operados por nós. Esteja ciente de que não temos controle sobre o
              conteúdo e práticas desses sites e não podemos aceitar
              responsabilidade por suas respectivas&nbsp;
            </span>
            <a
              href='https://politicaprivacidade.com/'
              rel='noopener noreferrer'
              target='_blank'
            >
              políticas de privacidade
            </a>
            <span>.</span>
          </p>
          <p>
            <span>
              Você é livre para recusar a nossa solicitação de informações
              pessoais, entendendo que talvez não possamos fornecer alguns dos
              serviços desejados.
            </span>
          </p>
          <p>
            <span>
              O uso continuado de nosso site será considerado como aceitação de
              nossas práticas em torno de privacidade e informações pessoais. Se
              você tiver alguma dúvida sobre como lidamos com dados do usuário e
              informações pessoais, entre em contacto connosco.
            </span>
          </p>
          <p>
            <span></span>
          </p>
          <h3>
            <span>Compromisso do Usuário</span>
          </h3>
          <p>
            <span>
              O usuário se compromete a fazer uso adequado dos conteúdos e da
              informação que o Hoop Bank oferece no site e com caráter
              enunciativo, mas não limitativo:
            </span>
          </p>
          <ul>
            <li>
              <span>
                A) Não se envolver em atividades que sejam ilegais ou contrárias
                à boa fé a à ordem pública;
              </span>
            </li>
            <li>
              <span>
                B) Não difundir propaganda ou conteúdo de natureza racista,
                xenofóbica, jogos de sorte ou azar, qualquer tipo de pornografia
                ilegal, de apologia ao terrorismo ou contra os direitos humanos;
              </span>
            </li>
            <li>
              <span>
                C) Não causar danos aos sistemas físicos (hardwares) e lógicos
                (softwares) do Hoop Bank, de seus fornecedores ou terceiros,
                para introduzir ou disseminar vírus informáticos ou quaisquer
                outros sistemas de hardware ou software que sejam capazes de
                causar danos anteriormente mencionados.
              </span>
            </li>
          </ul>
          <h3>
            <span>Mais informações</span>
          </h3>
          <p>
            <span>
              Esperemos que esteja esclarecido e, como mencionado anteriormente,
              se houver algo que você não tem certeza se precisa ou não,
              geralmente é mais seguro deixar os cookies ativados, caso interaja
              com um dos recursos que você usa em nosso site.
            </span>
          </p>
          <p>
            <span>
              Esta política é efetiva a partir de&nbsp;3 August 2023 09:02
            </span>
          </p>
        </div>
      </main>
      <ContactSection />
    </>
  );
}
