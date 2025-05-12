"use client";

import * as React from 'react'
import type { NextPage } from "next";
import { Header } from "@/components/Header/page";
import { Footer } from "@/components/Footer/page";
import { ContactForm } from '@/components/ContactForm/page';

import styles from "./contact.module.css";



const Contact: NextPage = () => {

  //const [selectedOption, setSelectedOption] = useState("");

  /*
  const handleOptionChange = (e: any) => {
    setSelectedOption(e.target.value);
  };
  */

  return (
    <>

      <Header></Header>

      <section className={styles.main_block}>
        <div className={styles.main_block_bg}>
          <h2>お問い合わせ</h2>
        </div>
      </section>

      <section className={styles.white_bg}>

        <section className={styles.tel_fax_block}>
          <h3>お電話・FAXでの<br className={styles.forsp} />お問い合わせ</h3>
          <p>個人でのご祈祷受付やご質問については下記<br className={styles.forsp} />お電話かFAXにてご連絡ください。</p>

          <div className={styles.tel_fax_flex}>
            <div><p><span>TEL</span>03-3371-7324</p></div>
            <div><p><span>FAX</span>03-5358-9011</p></div>
          </div>
        </section>


        <section className={styles.mail_block}>
          <h3>メールでのお問い合わせ</h3>
          <p>企業・団体さまのご祈祷受付やご質問については<br className={styles.nosp} />下記メールフォームにてお問い合わせください。<br />順次ご連絡いたしますので宜しくお願いいたします。</p>
          <p className={styles.mail_info}>※３営業日経っても返信がない場合は恐れ入りますがお電話にてご連絡ください。<br className={styles.nosp} />よろしくお願いいたします。</p>


        <ContactForm></ContactForm>

{/**
          <form>
          <div className={styles.mail_form}>
            <ul>
              <li className={styles.form_type01}>
                <div className={styles.form_type01_title}>ご用件</div>
                <div>
                
                  <label htmlFor="option01"><input type="radio" id="option01" value="option1" checked={selectedOption === "option1"} onChange={handleOptionChange} />神社について</label>
                  <label htmlFor="option02"><input type="radio" id="option02" value="option2" checked={selectedOption === "option2"} onChange={handleOptionChange} />ご祈祷について</label>
                  <label htmlFor="option03"><input type="radio" id="option03" value="option3" checked={selectedOption === "option3"} onChange={handleOptionChange} />その他のお問い合わせ</label>
                </div>

              </li>
              <li className={styles.form_type02}>
                <div className={styles.form_type02_title}>お名前</div>
                <div><input type="text" name="p_name" placeholder="山田 太郎" required /></div>
              </li>
              <li className={styles.form_type02}>
                <div className={styles.form_type02_title}>メールアドレス</div>
                <div><input type="text" name="email" placeholder="test@info.co.jp" required /></div>
              </li>
              <li className={styles.form_type02}>
                <div className={styles.form_type02_title}>お問い合わせ内容</div>
                <div><textarea name="message" placeholder="お問い合わせ内容を入力してください"></textarea></div>
              </li>
            </ul>
            <div className={styles.button_block}><button type="submit" name="submit">送信する</button></div>
          </div>
          </form>


            <div className={styles.thanks_txt}><p>お問い合わせありがとうございました。<br /> ご返信まで今しばらくお待ち下さい。</p></div>

            <div className={styles.thanks_txt}><p>メール送信に失敗しました。<br />お手数ですが再度お問い合わせ下さい。</p></div>
**/}

        </section>

      </section>



      <Footer />

    </>
  );

}

export default Contact;