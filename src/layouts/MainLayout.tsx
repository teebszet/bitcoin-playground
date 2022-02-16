import { useHistory } from 'react-router-dom';
import './MainLayout.scss';

type MainLayoutProps = {
  contentHeader?: string;
  contentDescription?: string;
};
export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  contentHeader,
  contentDescription,
}) => {
  const history = useHistory();
  // TODO useMemo
  const handleClickBack = () => {
    history.goBack();
  };

  return (
    <div className="main-layout">
      <header className="main-layout__header">
        {history.length > 1 && ( // TODO compare with location
          <div className="header__button-container">
            <button onClick={handleClickBack}>{'←'}</button>
          </div>
        )}
        <h1>Bitcoin Playground</h1>
      </header>
      <section className="main-layout__content">
        <h2 className="content__header">{contentHeader}</h2>
        <p className="content__description">{contentDescription}</p>
        {children}
      </section>
    </div>
  );
};

export default MainLayout;
