import { Header } from './components/header'
import { Post } from './components/post'
import { Sidebar } from './components/sidebar'

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/markduarte.png',
      name: 'Marcos Duarte',
      role: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera!!'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. E um projeto que... '},
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-11-29 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/markduarte.png',
      name: 'Marcos Duarte',
      role: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera!!'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. E um projeto que... '},
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-11-28 20:00:00'),
  }
]

function App() {

  return (
   <div>
     <Header />

     <div className={styles.wrapper}>
      <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
      </main>
     </div>
   </div>
  )
}

export default App
