import { PropagateLoader } from 'react-spinners';
import style from './Loader.module.css';

const Loader = (
  <div className={style.loader}>
    <PropagateLoader color="#0770f1" size={20} />
  </div>
);

export default Loader;
