import Head from 'next/head'

export default (props) => (
  <Head>
    <meta charSet="utf-8" />
    <link rel="mask-icon" href={props.prefix + '/static/favicon.svg'} />
    <link
      rel="icon"
      type="image/x-icon"
      className="js-site-favicon"
      href={props.prefix + '/static/favicon.ico'}
    />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="theme-color" content="#000000" />
    <title>
      冠良國際企業有限公司 | KUAN LIANG INTERNATIONAL ENTERPRISE CO., LTD.
    </title>
    <link
      href="https://fonts.googleapis.com/css?family=Nunito:100,200,300,400,500,600,700,800,900"
      rel="stylesheet"
    />
  </Head>
)
