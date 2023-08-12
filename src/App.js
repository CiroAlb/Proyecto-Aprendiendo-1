import './App.css';
import './componentes/PostComponent';
import React from 'react';
import ReactDOM from 'react-dom';
import PostContainer from './componentes/PostContainer';
import FollowButton  from './componentes/FollowButton';
import FollowersButton from './componentes/FollowersButton';
import MemberSince from './componentes/MemberSince';
import NombreVerificado from './componentes/NombreVerificado';
import ImageComponent from './componentes/ImageComponent';
import profile from './componentes/prueba';


const App = () => {
  return (
    <div className='app-container'>
      <div className='contenedor '>
        <div className='parte-superior bg-black'>
        <div className="centered">
            <ImageComponent imageUrl={profile.imageUrl} />
             <NombreVerificado name={profile.personName} isVerified={profile.isVerified} />
         </div>
          <MemberSince date={profile.memberSinceDate} className="member-since" />
          <div className="follow-buttons">
            <FollowButton />
            <FollowersButton seguidores={profile.seguidores} />
          </div>
          </div>
       <div className='parte-inferior'>
          <PostContainer name='Post' posts={profile.posts} />
          <PostContainer name="Comentarios" posts={profile.comentarios} />
          <PostContainer name="Favorites" posts={profile.favorites} />
          <PostContainer name="Notification" posts={profile.notification} />
          <PostContainer name="Drafts" posts={profile.drafts} />
       </div>
      </div>  
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));


export default App;
