import SubBanner from '../../Components/SubBanner/SubBanner';
import PostItem from './PostItem/PostItem';
import './Posts.scss';

const Posts = () => {
  return (
    <div className="wrrrapper">
      <SubBanner
        children={'News'}
        url={'https://th.bing.com/th/id/R.7a14be5fc1b25ff1fac7729cb546df9c?rik=FGk2C%2bvg0uYX6Q&pid=ImgRaw&r=0'}
        title={'Home'}
      />

      <PostItem />
    </div>
  );
};

export default Posts;
