import classNames from 'classnames/bind';
import styles from './Grid.module.scss';

const cx = classNames.bind(styles);

export const Grid = ({ children, className }) => {
   const gridClassName = cx('grid', className);
   return <div className={gridClassName}>{children}</div>;
};

export const GridWide = ({ children, className }) => {
   const gridWideClassName = cx('grid', 'wide', className);
   return <div className={gridWideClassName}>{children}</div>;
};

export const Row = ({ children, className }) => {
   const rowClassName = cx('row', className);
   return <div className={rowClassName}>{children}</div>;
};

export const RowNoGutter = ({ children, className }) => {
   const rowNoGutterClassName = cx('row', 'no-gutters', className);
   return <div className={rowNoGutterClassName}>{children}</div>;
};

export const Col = ({ size, offset, children, className }) => {
   const colClasses = size.map((s) => cx('col', s));
   const offsetClasses = offset && offset.map((o) => cx(o));
   const colClassName = cx(colClasses, offsetClasses, className);
   return <div className={colClassName}>{children}</div>;
};
