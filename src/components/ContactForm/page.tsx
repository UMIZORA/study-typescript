"use client";

import styles from "./contactform.module.css";
import { SetStateAction, useState} from "react";

import { ChangeEvent } from "react";
import { send } from "emailjs-com";
import { emailjsConfig } from "./Emailjs"



export const ContactForm = () => {

    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (e: { target: { value: SetStateAction<string>; }; }) => {
      setSelectedOption(e.target.value);
    };


    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const sendMail = () => {
  if (
    emailjsConfig.serviceId !== undefined &&
    emailjsConfig.templateId !== undefined
  ) {
    const template_param = {
      to_name: name,
      from_email: email,
      message: message,
    }

    send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      template_param
    ).then(() => {
      window.alert('お問い合わせを送信致しました。')
      setName('')
      setEmail('')
      setMessage('')
    })
  }
}


  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    sendMail()
  }


  


  return (
    <>

      <form onSubmit={onSubmit}>
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
              <div><input type="text" id="name" name="name" placeholder="山田 二郎" value={name} onChange={(e) => setName(e.target.value)} required /></div>
            </li>
            <li className={styles.form_type02}>
              <div className={styles.form_type02_title}>メールアドレス</div>
              <div><input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="test@info.co.jp" required /></div>
            </li>
            <li className={styles.form_type02}>
              <div className={styles.form_type02_title}>お問い合わせ内容</div>
              <div><textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="お問い合わせ内容を入力してください" required></textarea></div>
            </li>
          </ul>
          <div className={styles.button_block}><input type="submit" name="submit" value="送信する" /></div>
        </div>
      </form>

    </>

  );
}



//<div className={styles.thanks_txt}><p>お問い合わせありがとうございました。<br /> ご返信まで今しばらくお待ち下さい。</p></div>
//<div className={styles.thanks_txt}><p>メール送信に失敗しました。<br />お手数ですが再度お問い合わせ下さい。</p></div>