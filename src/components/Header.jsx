import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <header >
        <p>Organização</p>
        <p>Tarefas</p>
      </header>
      <h1>
          Otimize seu tempo e se organize com o nosso<br></br>
          <span>Planejador Diário!</span> 
      </h1>
    </div>
    
  )
}

export default Header