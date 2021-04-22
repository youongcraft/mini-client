import Head from 'next/head'
import styles from '../styles/index.module.css'
import Layout from '../components/layout'
export default function Home() {
  return (
    <div class="fullpart">
      <Layout>
        <Head>
          <title>Home</title>
        </Head>
        <nav>
          <ul>
            <div class="ul">
              <li><div class="li"><a class="active" href="#home">Home</a></div></li>
              <li><div class="li"><a href="Part2.html">Landmarks</a></div></li>
              <li><div class="li"><a href="Part3.html">Weather</a></div></li>
            </div>
          </ul>
        </nav>
        <div class="body" bgcolor="#F0FFF0">
          <div class="header">
            <div class="container">
              <img src="https://f.ptcdn.info/655/060/000/phnfz1kfreAwiOioqI1-o.png" alt="phuket" />
            </div>
          </div>
          <div class="nav">
            <nav>
              <ul>
                <div class="ul">
                  <li><div class="li"><a href="#introduction">Phuket</a></div></li>
                  <li><div class="li"><a href="#History">history</a></div></li>
                </div>
              </ul>
            </nav>
          </div>
          <div id="introduction">
            <h2>
              <div class="H2">
                <center>About Phuket</center>
              </div>
            </h2>
          </div>

          <div>
            <div class=".intro">
              <p>ภูเก็ต เป็นจังหวัดหนึ่งทางภาคใต้ของประเทศไทย และเป็นเกาะขนาดใหญ่ที่สุดในประเทศไทย อยู่ในทะเลอันดามัน จังหวัดที่ใกล้เคียงทางทิศเหนือ คือ จังหวัดพังงา ทางทิศตะวันออก คือ จังหวัดพังงาและจังหวัดกระบี่ ทั้งเกาะล้อมรอบด้วยมหาสมุทรอินเดีย และยังมีเกาะที่อยู่ในอาณาเขตของจังหวัดภูเก็ตทางทิศใต้และตะวันออก การเดินทางเข้าสู่ภูเก็ตนอกจากทางเรือแล้ว สามารถเดินทางโดยรถยนต์ซึ่งมีเพียงเส้นทางเดียวผ่านทางจังหวัดพังงา โดยข้ามสะพานสารสินและสะพานคู่ขนาน คือ สะพานท้าวเทพกระษัตรีและสะพานท้าวศรีสุนทร เพื่อเข้าสู่ตัวจังหวัด และทางอากาศโดยมีท่าอากาศยานนานาชาติภูเก็ตรองรับ ท่าอากาศยานนี้ตั้งอยู่ทางทิศตะวันตกเฉียงเหนือของเกาะ
            </p></div>
            <section>
              <div class="in-section">
                <img src="https://lh3.googleusercontent.com/proxy/KOm4EPLgpAinMkLE53BXpbaQ8nzupqQnKKXuk9-XHEJXK3roqdrfeWEWQ_7K1cz1puG0QymUf-cccXU377F4ZT5Ao-tejADGKZFWNrL9ue0g" alt="phuket" width="350" height="450" />
                <article>
                  <div class="article">
                    <center>
                      <table>
                        <div class="table">
                          <tr>
                            <th><div class="th">District</div></th>
                            <th><div class="th">Population</div></th>
                            <th><div class="th">Area</div></th>
                            <th><div class="th">Postal code</div></th>
                          </tr>
                          <tr>
                            <td><div class="td">Amphoe Mueang Phuket</div></td>
                            <td><div class="td">250,474</div></td>
                            <td><div class="td">86.5 sq mi</div></td>
                            <td><div class="td">83000, 83100, 83130</div></td>
                          </tr>
                          <tr>
                            <td><div class="td">Amphoe Thalang</div></td>
                            <td><div class="td">106,847 </div></td>
                            <td><div class="td">97.3 sq mi</div></td>
                            <td><div class="td">83110</div></td>
                          </tr>
                          <tr>
                            <td><div class="td">Amphoe Kathu</div></td>
                            <td><div class="td">59,261</div></td>
                            <td><div class="td">25.90 sq mi</div></td>
                            <td><div class="td">83120, 83150</div></td>
                          </tr>
                        </div>
                      </table>
                    </center>
                  </div>
              </article>
              </div>
            </section>
          </div>

            <div id="History">
              <h2>
                <div class="H2">
                  <center>History</center>
                </div>
              </h2>
              <div class="historyo">
                <p>
                  ปัจจุบันชาวภูเก็ตส่วนใหญ่จะเป็นชาวจีนกลุ่มต่าง ๆ ไม่ว่าจะเป็น ชาวจีนฮกเกี้ยน ชาวจีนช่องแคบ ชาวจีนกวางตุ้ง ฯลฯ รวมไปถึงชาวไทยพุทธและชาวไทยมุสลิม แถบอำเภอถลาง โดยเฉพาะชาวไทยมุสลิมมีจำนวนถึงร้อยละ 20-36 ของประชากรในภูเก็ต มีมัสยิดแถบอำเภอถลางราว 30 แห่งจาก 42 แห่งทั่วจังหวัด มีกลุ่มชาติพันธุ์ชาวเล กลุ่มอูรักลาโว้ยและพวกมอแกน (มาซิง) ซึ่งมอแกนแบ่งออกเป็น 2 กลุ่มย่อย คือ มอเกนปูเลา (Moken Pulau) และ มอเกนตาหมับ (Moken Tamub) และยังมีชนกลุ่มต่างชาติอย่างชาวยุโรปที่เข้าลงทุนในภูเก็ต รวมไปถึงชาวอินเดีย มีชาวคริสต์ในภูเก็ตราว 300 คน ชาวสิกข์ที่มีอยู่ราว 200 คน และชาวฮินดูราว 100 คน และแรงงานต่างด้าวชาวพม่า ลาว และเขมรราวหมื่นคน
            </p>
              </div>
            </div>
          </div>
      </Layout>
    </div>

  )
}
