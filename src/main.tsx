import { BrowserAgent } from '@newrelic/browser-agent/loaders/browser-agent'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Populate using values in copy-paste JavaScript snippet.
const options = {
    init: {session_replay:{enabled:true,block_selector:'',mask_text_selector:'*',sampling_rate:10.0,error_sampling_rate:100.0,mask_all_inputs:true,collect_fonts:true,inline_images:false,inline_stylesheet:true,fix_stylesheets:true,mask_input_options:{}},distributed_tracing:{enabled:true},privacy:{cookies_enabled:true},ajax:{deny_list:["bam.nr-data.net"]}}, // NREUM.init
    info: {beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",licenseKey:"NRBR-831606d506bdf5cdc0b",applicationID:"601539091",sa:1}, // NREUM.info
    loader_config: {accountID:"1",trustKey:"1",agentID:"601539091",licenseKey:"NRBR-831606d506bdf5cdc0b",applicationID:"601539091"} // NREUM.loader_config
  }
  
  // The agent loader code executes immediately on instantiation.
  new BrowserAgent(options)

createRoot(document.getElementById("root")!).render(<App />);

