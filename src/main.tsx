import { BrowserAgent } from '@newrelic/browser-agent/loaders/browser-agent'
import { Metrics } from '@newrelic/browser-agent/features/metrics'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Populate using values in copy-paste JavaScript snippet.
const options = {
  init: {distributed_tracing:{enabled:true},privacy:{cookies_enabled:true},ajax:{deny_list:["bam.nr-data.net"]}}, // NREUM.init
  info: {beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",licenseKey:"NRJS-c481e5eae4889263f09",applicationID:"601577303",sa:1}, // NREUM.info
  loader_config: {accountID:"4450385",trustKey:"4450385",agentID:"601577303",licenseKey:"NRJS-c481e5eae4889263f09",applicationID:"601577303"}, // NREUM.loader_config
}
  
  // Before settin setUserId
  // new BrowserAgent(options)

  // Modification to add the userId
  const browserAgent = new BrowserAgent({
  ...options,
  features: [
    Metrics
  ]
})

browserAgent.setUserId('user-1234-v1.0')

createRoot(document.getElementById("root")!).render(<App />);




