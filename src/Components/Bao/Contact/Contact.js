import styles from './Contact.module.scss';
import classNames from 'classnames/bind';

import Head from '../../SubBanner/SubBanner';
import Content from '../Conten/Content';
import ContactAddress from '../ContactAddress/ContactAddress';
import Form from '../Form/Form';
import Title from '../../Title';

const cx = classNames.bind(styles);
const Contact = () => {
  return (
    <div className={cx('wrapper')}>
      <Head
        url="https://images2.thanhnien.vn/zoom/686_429/528068263637045248/2023/4/6/gettyimages-1190436380-1680790180838334265656-0-0-750-1200-crop-16807901877921494031527.jpg"
        title="Home"
      >
        Contact
      </Head>
      <div className={cx('container')}>
        <Content title={<Title title={'LOCATION AVERAGE'} />}>
          The match you are referring to might be the Copa del Rey (Spanish Cup) semifinal match between Real Madrid and
          Barcelona in 2019. This match ended in a 4-0 victory for Real Madrid, propelling them into the final of the
          tournament. It was one of the significant and memorable matches in the history of these two prominent Spanish
          football clubs. Here is a general description of the match: Date and Venue: The match took place in 2019 at
          the Bernabéu Stadium, the home ground of Real Madrid. Result: Real Madrid 4 - 0 Barcelona.
        </Content>
        <ContactAddress />
        <h3 className={cx('title-form')}>CONTACT FORM</h3>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
