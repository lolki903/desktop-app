import '../App.css'
import SendbirdApp from '@sendbird/uikit-react/App';
import '@sendbird/uikit-react/dist/index.css';

export const MessageSendBird = () => {
  return (
    <div className="Appwww">
      <SendbirdApp
        appId={'BB035844-3EA4-4A3C-8370-E37B3E841F8C'}
        userId={"test2"}
      />
    </div>)
}