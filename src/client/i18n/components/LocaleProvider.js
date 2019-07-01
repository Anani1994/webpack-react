import React from 'react';
import { connect } from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl';
import englishLocaleData from 'react-intl/locale-data/en';
import chineseLocaleData from 'react-intl/locale-data/zh';
import zhCN from '../locales/zh-CN';
import enUS from '../locales/en-US';

addLocaleData([...englishLocaleData, ...chineseLocaleData]);
const messages = {
  'zh-CN': zhCN,
  'en-US': enUS,
};

const LocaleProvider = (props) => {
  const { lang, children } = props;
  return (
    <IntlProvider locale={lang} messages={messages[lang]}>
      {children}
    </IntlProvider>
  );
};

const mapStateToProps = state => ({
  lang: state.getIn(['i18n', 'lang']),
});

export default connect(
  mapStateToProps,
  null,
)(LocaleProvider);
