import React from 'react';
import classNames from 'classnames/bind';
import styles from './Text-info.module.scss';

const cx = classNames.bind(styles);

const Textinfo = () => {
    return(
        <div className={cx('Text')}>
            <div className={cx('title-overview')}>Overview</div>
            <p className={cx('overview-text-1')}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi ar chitecto beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia con sequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            <p className={cx('overview-text-2')}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
        </div>
    )
}
export default Textinfo;