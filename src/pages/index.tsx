import React, { FC, Fragment, useCallback, useState } from 'react'
import { navigate } from 'gatsby'
import { RouteComponentProps } from '@reach/router'
import { GoogleLoginButton } from 'react-social-login-buttons'
import { Layout, Button, Divider, Alert } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import logo from '../assets/logo.png'
import intro from '../assets/intro.png'
import SEO from '../components/SEO'

const { Header, Content, Footer } = Layout

const HomePage: FC<RouteComponentProps> = () => {
  const [loginLoading, setLoginLoading] = useState(false)

  const redirectToLogin = useCallback(() => {
    setLoginLoading(true)
    setTimeout(() => {
      navigate('/app/login')
    }, 500)
  }, [setLoginLoading])

  return (
    <Fragment>
      <SEO />
      <Layout>
        <Header
          style={{
            position: 'fixed',
            zIndex: 1,
            width: '100%',
            padding: '0 10px',
          }}
          className="flex justify-between tc mb3"
        >
          <div style={{ flex: 1 }} />
          <div>
            <img
              src={logo}
              alt="Alt Zap"
              className="pa2"
              style={{ maxHeight: '55px' }}
            />
          </div>
          <div style={{ flex: 1 }} className="flex justify-end">
            <button
              onClick={() => {
                redirectToLogin()
              }}
              onKeyPress={() => {
                redirectToLogin()
              }}
              tabIndex={0}
              className="f5 f4-l white fw2 bg-transparent bn pointer dim"
            >
              {loginLoading ? (
                <LoadingOutlined style={{ fontSize: 24 }} spin />
              ) : (
                'Login'
              )}
            </button>
          </div>
        </Header>
        <Content className="flex justify-center" style={{ marginTop: '80px' }}>
          <div className="w-100 w-60-l">
            <div className="flex flex-column">
              <span className="black f3 f1-l fw2 ph2 pt3 mt2 mb3 pb2 pa4 tc">
                Compartilhe seus produtos e receba pedidos pelo Whatsapp
              </span>
              <div className="flex justify-center">
                <div className="bg-light-gray br4 shadow-1 pv1 ph2 fw3">
                  <span className="b" style={{ color: '#1890FF' }}>
                    GRATUITAMENTE
                  </span>
                </div>
              </div>
              <div className="flex justify-center pt3 mt3">
                <img className="w-80 w-50-l h-auto" src={intro} alt="Alt Zap" />
              </div>
              <div className="flex mt4 mb1 pl2">
                <span className="f4 fw3">Feito para:</span>
              </div>
              <div className="flex flex-wrap ml1">
                {[
                  'HAMBURGUERIAS',
                  'LOJAS DE ROUPA',
                  'PIZZARIAS',
                  'DOCERIAS',
                  'O QUE VOC?? QUISER',
                ].map((text, i) => (
                  <span
                    key={i}
                    style={{
                      color: i === 4 ? '#1890FF' : '#000',
                      whiteSpace: 'nowrap',
                    }}
                    className="bg-light-gray shadow-1 pv1 ph2 b ma2 mh1 br4 f7"
                  >
                    {text}
                  </span>
                ))}
              </div>
              <div className="flex flex-column items-center mt4">
                <span className="f3 fw3 mb3">Como funciona</span>
                <ol>
                  <li>
                    Voc?? configura seu <b>cat??logo de produtos</b> no nosso
                    sistema. D?? pra colocar nome, imagem e descri????o.
                  </li>
                  <Divider />
                  <li>
                    Voc?? configura os <b>meios de pagamento</b> que voc?? aceita,
                    podendo fornecer informa????es para pagamento (PicPay,
                    Nuconta...).
                  </li>
                  <Divider />
                  <li>
                    Ap??s isso, iremos{' '}
                    <b>gerar um link ??nico para o seu neg??cio.</b> Se parece com
                    algo assim: <i>alt-zap.vercel.app/bar-do-lucis</i>.
                  </li>
                  <Divider />
                  <li>
                    Voc?? compartilha esse link com seus clientes nas redes
                    sociais, e eles poder??o{' '}
                    <b> selecionar os produtos e o endere??o de entrega.</b>
                  </li>
                  <Divider />
                  <li>
                    No final, encaminhamos o cliente para o Whatsapp{' '}
                    <b>com o pedido pronto para enviar at?? voc??.</b>
                  </li>
                </ol>
              </div>
              <div className="flex flex-column items-center mt4 ph1">
                <span className="f3 fw3 mb3">Funcionalidades</span>
                <ul>
                  <li>
                    Preenchimento autom??tico de endere??o por CEP ou localiza????o
                  </li>
                  <li>
                    Produtos cadastrados podem ser desabilitados temporariamente
                  </li>
                  <li>Meios de Pagamento com descri????o e imagem</li>
                </ul>
                <Alert
                  type="info"
                  className="ma2"
                  message={
                    <Fragment>
                      {`O AltZap est?? em fase beta e futuramente traremos v??rias
                    outras funcionalidades. Caso voc?? se interesse em
                    desenvolver, visite nosso `}
                      <a href="https://github.com/lucis/alt-zap" rel="noopener">
                        Github
                      </a>
                    </Fragment>
                  }
                />
              </div>
              <div className="flex flex-column items-center mt4">
                <Button
                  type="primary"
                  size="large"
                  className="br2 pt2 mt2"
                  onClick={() => navigate('/refazenda')}
                >
                  Veja um modelo!
                </Button>
              </div>
              <div className="flex justify-center tc mt4">
                <span className="f3 fw3 mb3">
                  Crie sua p??gina gratuitamente:
                </span>
              </div>
              <div className="flex justify-center">
                <GoogleLoginButton
                  text="Entre com o Google"
                  style={{
                    maxWidth: '300px',
                  }}
                  onClick={() => {
                    navigate('/app/login')
                  }}
                />
              </div>
            </div>
          </div>
        </Content>
        <Footer className="tc">
          Alt Zap ??2020 -{' '}
          <a href="https://github.com/alt-zap/alt-zap">Estamos no Github</a>
        </Footer>
      </Layout>
    </Fragment>
  )
}

export default HomePage
