import React, { useState } from 'react';
import { PageContainer, ProCard, ProLayout, WaterMark } from '@ant-design/pro-components';
import {
    GithubFilled,
    InfoCircleFilled,
    QuestionCircleFilled,
} from '@ant-design/icons';
import defaultProps from './_defaultProps';

import './app.less';
const App = () => {
    const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');
    return (
        <WaterMark content="水印">
            <div>
                <ProLayout
                    siderWidth={216}
                    bgLayoutImgList={[
                        {
                            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                            left: 85,
                            bottom: 100,
                            height: '303px',
                        },
                        {
                            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                            bottom: -68,
                            right: -45,
                            height: '303px',
                        },
                        {
                            src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
                            bottom: 0,
                            left: 0,
                            width: '331px',
                        },
                    ]}
                    {...defaultProps}
                    location={{
                        pathname,
                    }}
                    avatarProps={{
                        src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
                        title: '七妮妮',
                        size: 'small',
                    }}
                    actionsRender={(props) => {
                        if (props.isMobile) return [];
                        return [
                            <InfoCircleFilled key="InfoCircleFilled" />,
                            <QuestionCircleFilled key="QuestionCircleFilled" />,
                            <GithubFilled key="GithubFilled" />,
                        ];
                    }}
                    menuItemRender={(item, dom) => (
                        <div
                            onClick={() => {
                                setPathname(item.path || '/welcome');
                            }}
                        >
                            {dom}
                        </div>
                    )}
                >
                    <PageContainer>
                        <ProCard
                            style={{
                                height: '100vh',
                                minHeight: 800,
                            }}
                        >
                            <div />
                        </ProCard>
                    </PageContainer>
                </ProLayout>
            </div>
        </WaterMark>
    );
}

export default App;