import style from './Content.module.css'

const Content = () => {
  return (
    <div className={style.content}>
      <h2>Título</h2>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent leo turpis, vulputate non aliquam euismod, molestie sit amet enim. Ut nisi mi, eleifend et nibh sit amet, tristique pharetra ante. In viverra sed eros eu rhoncus. Donec cursus pretium pretium. Phasellus convallis lobortis augue eu faucibus. Proin egestas laoreet euismod. Nulla sodales, mauris a egestas sollicitudin, nisl tortor volutpat metus, at ullamcorper neque nisl eu erat.
      </p>
      <button className={style.btn}>Outro Botão Teste</button>
    </div>
  )
}

export default Content