import { Anchor } from 'antd';
import { All, Div, Div1, Div2, Div3, Div4, Div5, Div6 } from '../../../styles/test.style';

export default function TestContainer() {

    const AnchorStyle = {
        border: '1px solid',
        height: '70vh',
        margin: '80px 30px',
        fontsize: '100px',
    }

    return (
        <All>
            <Div>
              <Anchor
                style={AnchorStyle}
                affix={true}
                items={[
                  {
                    key: 'part-1',
                    href: '#part-1',
                    title: 'asdfsadf',
                  },
                  {
                    key: 'part-2',
                    href: '#part-2',
                    title: 'Part 2',
                  },
                  {
                    key: 'part-3',
                    href: '#part-3',
                    title: 'Part 3',
                  },
                  {
                    key: 'part-4',
                    href: '#part-4',
                    title: 'Part 4',
                  },
                  {
                    key: 'part-5',
                    href: '#part-5',
                    title: 'Part 5',
                  },
                  {
                    key: 'part-6',
                    href: '#part-6',
                    title: 'Part 6',
                  },
                ]}
              />
            </Div>
            <div>
                <Div1 id="part-1">
                    <div>as</div>
                    <div>asd</div>
                </Div1>
                <Div2  id="part-2">
                    <div>as</div>
                    <div>asd</div>
                </Div2>
                <Div3  id="part-3">
                    <div>
                        <div>
                            asdf
                        </div>
                        <div>
                            <div>sdaf</div>
                            <div>sdf</div>
                        </div>
                    </div>
                </Div3>
                <Div4  id="part-4">
                    <div>
                        <div>
                            asdf
                        </div>
                        <div>
                            sadf
                        </div>
                    </div>
                    <div>
                        <div>
                            asdf
                        </div>
                        <div>
                            <div>asdf</div>
                            <div>asdf</div>
                            <div>asdf</div>
                        </div>
                    </div>
                </Div4>
                <Div5  id="part-5"></Div5>
                <Div6  id="part-6"></Div6>
            </div>
        </All>     
    )       
}       
