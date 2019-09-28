import config from '../../content/config';

export default function ApiFetch(props) {
  const { area, query } = props;
  let url;

  if (props.request === 'get') {
    url = `${config.urlDev}/${area}/${query}`;
  }

  if (props.request === 'post') { url = `${config.urlDev}/${area}`; }

  if (props.request === 'put') { url = `${config.urlDev}/${area}/${query}`; }

  if (props.request === 'delete') { url = `${config.urlDev}/${area}/${query}`; }


  return {
    url,
    headers: { 'Content-Type': 'application/json' },
  };
}
