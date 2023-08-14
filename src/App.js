import React from 'react';
import ReactDOM from 'react-dom';
import PostContainer from './componentes/PostContainer';
import FollowButton from './componentes/FollowButton';
import FollowersButton from './componentes/FollowersButton';
import MemberSince from './componentes/MemberSince';
import NombreVerificado from './componentes/NombreVerificado';
import ImageComponent from './componentes/ImageComponent';
import profile from './componentes/prueba';

const App = () => {
  return (
    <div className='flex justify-center items-start h-screen pt-40 bg-gray-100'>
      <div className='w-1/3 flex flex-col items-center bg-white  shadow'>
        <div className='flex flex-col items-center'>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
             <ImageComponent imageUrl={profile.imageUrl} />
              <NombreVerificado name={profile.personName} isVerified={profile.isVerified} />
              <MemberSince date={profile.memberSinceDate} className="mt-5" />
          </div>
          <div className='flex justify-center items-center space-x-5 mt-5'>
            <FollowButton />
            <FollowersButton seguidores={profile.seguidores} />
          </div>
        </div>
        <div className=' w-full mt-5'>
          <PostContainer name='Post' posts={profile.posts} />
          <PostContainer name='Comentarios' posts={profile.comentarios} />
          <PostContainer name='Favorites' posts={profile.favorites} />
          <PostContainer name='Notification' posts={profile.notification} />
          <PostContainer name='Drafts' posts={profile.drafts} />
        </div>

      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
