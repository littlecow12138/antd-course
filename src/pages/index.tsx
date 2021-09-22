import styles from './index.less';
import { Card } from 'antd';

export default function IndexPage() {
  const style = {
    width: '400px',
    margin: '30px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0,2)',
    border: '1px solid #e8e8e8',
  };
  return (
    <div>
      {/* <h1 className={styles.title}>Page index</h1> */}
      <Card style={style} actions={[<a>操作一</a>, <a>操作二</a>]}>
        <Card.Meta
          avatar={
            <img
              style={{ width: '64px', height: '64px', borderRadius: '32px' }}
              src="https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png"
            ></img>
          }
          title="Alipay"
          description="在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在类似的页面和组件，这些类似的组件会被抽离成一套标准规范。"
        ></Card.Meta>
      </Card>
    </div>
  );
}
