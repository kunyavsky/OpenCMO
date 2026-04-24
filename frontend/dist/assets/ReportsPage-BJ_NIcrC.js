import{j as e,M as O}from"./vendor-markdown-06REx5m4.js";import{r as b}from"./vendor-charts-Dfg0lvlF.js";import{c as P,f as C,n as G,L as I,C as F,o as A,p as B,a as R,u as K,d as Q,e as Y,h as J,i as V,j as X,E,k as Z,l as ee,F as te,M as se,B as re,H as ae,q as ne,I as ie}from"./index-qWOkZcwD.js";import{U as oe}from"./user-CbVHvmQn.js";/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],de=P("circle",le);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],pe=P("download",ce);/**
 * @license lucide-react v0.514.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]],xe=P("refresh-ccw",me),ue={reflection:"pipeline.phaseReflection",distillation:"pipeline.phaseDistillation",planning:"pipeline.phasePlanning",writing:"pipeline.phaseWriting",grading:"pipeline.phaseGrading",synthesis:"pipeline.phaseSynthesis"},k=["reflection","distillation","planning","writing","grading","synthesis"];function fe({status:a}){return a==="completed"?e.jsx(F,{size:18,className:"text-emerald-500"}):a==="running"?e.jsx(I,{size:18,className:"text-blue-500 animate-spin"}):a==="failed"?e.jsx(A,{size:18,className:"text-rose-500"}):e.jsx(de,{size:18,className:"text-slate-300"})}function ge({taskId:a,onComplete:o}){const[x,s]=b.useState(null),{t:l}=C(),u=b.useRef(!1),{data:t,isLoading:r}=G(a);if(b.useEffect(()=>{t&&(t.status==="completed"||t.status==="failed")&&!u.current&&(u.current=!0,t.status==="completed"&&o&&setTimeout(o,1500))},[t,o]),r||!t)return e.jsxs("div",{className:"flex items-center justify-center py-8",children:[e.jsx(I,{size:20,className:"animate-spin text-slate-400"}),e.jsx("span",{className:"ml-2 text-sm text-slate-500",children:l("pipeline.connecting")})]});const p={};for(const c of t.progress){const n=c.phase;n&&(p[n]||(p[n]={status:c.status??"running",events:[]}),p[n].status=c.status??p[n].status,p[n].events.push(c))}const f=k.filter(c=>{var n;return((n=p[c])==null?void 0:n.status)==="completed"}).length,d=t.status==="completed"?100:Math.round(f/k.length*100);return e.jsxs("div",{className:"rounded-2xl border border-slate-200/70 bg-gradient-to-b from-white to-slate-50/80 p-5 shadow-sm",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[t.status==="running"&&e.jsxs("div",{className:"relative flex h-3 w-3",children:[e.jsx("span",{className:"absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"}),e.jsx("span",{className:"relative inline-flex h-3 w-3 rounded-full bg-blue-500"})]}),t.status==="completed"&&e.jsx(F,{size:16,className:"text-emerald-500"}),t.status==="failed"&&e.jsx(A,{size:16,className:"text-rose-500"}),e.jsxs("span",{className:"text-sm font-semibold text-slate-700",children:[t.status==="pending"&&l("pipeline.preparing"),t.status==="running"&&l("pipeline.agentsWorking"),t.status==="completed"&&l("pipeline.complete"),t.status==="failed"&&l("pipeline.error")]})]}),e.jsxs("span",{className:"text-xs font-medium text-slate-500",children:[d,"%"]})]}),e.jsx("div",{className:"h-1.5 w-full rounded-full bg-slate-100 mb-5 overflow-hidden",children:e.jsx("div",{className:`h-full rounded-full transition-all duration-700 ease-out ${t.status==="failed"?"bg-rose-500":t.status==="completed"?"bg-emerald-500":"bg-blue-500"}`,style:{width:`${d}%`}})}),e.jsx("div",{className:"space-y-1",children:k.map((c,n)=>{const i=p[c],m=(i==null?void 0:i.status)||"pending",g=ue[c],y=g?l(g):c,h=(i==null?void 0:i.events)||[],j=h[h.length-1],w=x===n;return e.jsxs("div",{children:[e.jsxs("button",{type:"button",onClick:()=>s(w?null:n),className:"flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition hover:bg-slate-50",children:[e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx(fe,{status:m}),n<k.length-1&&e.jsx("div",{className:`mt-1 h-3 w-px ${m==="completed"?"bg-emerald-300":"bg-slate-200"}`})]}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("span",{className:`text-sm font-medium ${m==="completed"?"text-emerald-700":m==="running"?"text-blue-700":m==="failed"?"text-rose-700":"text-slate-400"}`,children:y}),j&&m!=="pending"&&e.jsx("p",{className:"text-xs text-slate-500 truncate mt-0.5",children:j.summary})]}),h.length>1&&e.jsx(B,{size:14,className:`text-slate-400 transition ${w?"rotate-180":""}`})]}),w&&h.length>1&&e.jsx("div",{className:"ml-[42px] mb-2 space-y-1 animate-in fade-in slide-in-from-top-1 duration-200",children:h.map((v,$)=>e.jsxs("div",{className:"flex items-start gap-2 rounded-lg bg-slate-50 px-3 py-1.5",children:[e.jsx("span",{className:`mt-0.5 h-1.5 w-1.5 rounded-full shrink-0 ${v.status==="completed"?"bg-emerald-400":v.status==="running"?"bg-blue-400":v.status==="failed"?"bg-rose-400":"bg-slate-300"}`}),e.jsx("span",{className:"text-xs text-slate-600 leading-snug",children:v.summary})]},$))})]},c)})}),t.error&&e.jsx("div",{className:"mt-4 rounded-xl border border-rose-200 bg-rose-50 p-3",children:e.jsx("p",{className:"text-xs font-medium text-rose-800",children:t.error})})]})}function he(a){return R(`/projects/${a}/report`,{method:"POST"})}function be(a){return R(`/projects/${a}/reports`)}function je(a){return R(`/projects/${a}/reports/latest`)}function ve(a){return K({queryKey:["latest-reports",a],queryFn:()=>je(a)})}function ye(a){return K({queryKey:["reports",a],queryFn:()=>be(a)})}function we(a){const o=Q();return Y({mutationFn:()=>he(a),onSuccess:async()=>{await Promise.all([o.invalidateQueries({queryKey:["reports",a]}),o.invalidateQueries({queryKey:["latest-reports",a]})])}})}const Ne="/logo.png";async function ke(){try{const o=await(await fetch(Ne)).blob();return await new Promise((x,s)=>{const l=new FileReader;l.onloadend=()=>x(l.result),l.onerror=s,l.readAsDataURL(o)})}catch{return""}}function Re(){return`
    @page {
      size: A4;
      margin: 24mm 22mm;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', 'PingFang SC', 'Microsoft YaHei', -apple-system, sans-serif;
      font-size: 14.5px;
      line-height: 1.8;
      color: #334155;
      background: #fff;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    /* ---- Header ---- */
    .report-header {
      display: flex;
      align-items: center;
      gap: 16px;
      border-bottom: 3px solid #6366f1;
      padding-bottom: 20px;
      margin-bottom: 35px;
    }
    .report-header img {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      object-fit: contain;
    }
    .report-header-title {
      font-size: 24px;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.4px;
      line-height: 1.3;
    }
    .report-header-sub {
      font-size: 12.5px;
      color: #94a3b8;
      margin-top: 4px;
    }

    /* ---- Content (matches .premium-report) ---- */
    .premium-report h1 {
      font-size: 24px;
      font-weight: 800;
      color: #0f172a;
      margin: 36px 0 16px;
      padding-bottom: 12px;
      border-bottom: 3px solid #6366f1;
      letter-spacing: -0.3px;
      line-height: 1.35;
      page-break-after: avoid;
      break-after: avoid;
    }
    .premium-report h1:first-child { margin-top: 0; }

    .premium-report h2 {
      font-size: 19px;
      font-weight: 700;
      color: #1e293b;
      margin: 30px 0 12px;
      padding-bottom: 6px;
      border-bottom: 2px solid #f1f5f9;
      line-height: 1.35;
      page-break-after: avoid;
      break-after: avoid;
      display: flex;
      align-items: center;
    }
    .premium-report h2::before {
      content: "";
      display: inline-block;
      width: 6px;
      height: 22px;
      background: #6366f1;
      border-radius: 4px;
      margin-right: 10px;
    }

    .premium-report h3 {
      font-size: 16px;
      font-weight: 700;
      color: #1e293b;
      margin: 24px 0 10px;
      padding-left: 12px;
      border-left: 4px solid #a5b4fc;
      line-height: 1.4;
      background: #f8fafc;
      padding-top: 6px;
      padding-bottom: 6px;
      padding-right: 10px;
      border-radius: 0 4px 4px 0;
      width: max-content;
      page-break-after: avoid;
      break-after: avoid;
    }

    .premium-report h4 {
      font-size: 14.5px;
      font-weight: 700;
      color: #334155;
      margin: 20px 0 8px;
      page-break-after: avoid;
      break-after: avoid;
    }

    .premium-report p {
      margin: 0 0 18px;
      text-align: justify;
      orphans: 3;
      widows: 3;
    }

    .premium-report ul { list-style: none; margin: 12px 0 20px; padding-left: 20px; }
    .premium-report ol { list-style: decimal; margin: 12px 0 20px; padding-left: 28px; }
    
    .premium-report ul > li { position: relative; margin-bottom: 8px; line-height: 1.7; }
    .premium-report ul > li::before {
      content: "•";
      position: absolute;
      left: -16px;
      color: #6366f1;
      font-weight: 900;
      font-size: 1.2em;
      top: -2px;
    }
    .premium-report ol > li::marker { color: #6366f1; font-weight: 700; }

    .premium-report blockquote {
      margin: 20px 0;
      padding: 12px 20px;
      background: #eff6ff;
      border-left: 5px solid #3b82f6;
      border-top: 1px solid #e0e7ff;
      border-right: 1px solid #e0e7ff;
      border-bottom: 1px solid #e0e7ff;
      border-radius: 0 8px 8px 0;
      color: #334155;
      font-style: italic;
    }
    .premium-report blockquote p { margin-bottom: 8px; }
    .premium-report blockquote p:last-child { margin-bottom: 0; }

    .premium-report strong {
      font-weight: 700;
      color: #0f172a;
      background: #f1f5f9;
      padding: 0 4px;
      border-radius: 2px;
    }

    .premium-report code {
      font-family: 'SF Mono', 'Fira Code', Consolas, monospace;
      font-size: 13px;
      background: #eef2ff;
      padding: 2px 6px;
      border-radius: 4px;
      color: #4f46e5;
      border: 1px solid #e0e7ff;
      white-space: pre-wrap;
      word-break: break-all;
    }

    .premium-report pre {
      background: #0f172a;
      color: #f8fafc;
      padding: 18px;
      border-radius: 10px;
      overflow: auto;
      margin: 16px 0 24px;
      font-size: 13px;
      line-height: 1.6;
      page-break-inside: avoid;
    }
    .premium-report pre code {
      background: none;
      padding: 0;
      border: none;
      color: inherit;
    }

    .premium-report table {
      width: 100%;
      border-collapse: collapse;
      margin: 24px 0;
      font-size: 13.5px;
      page-break-inside: avoid;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
    }
    .premium-report thead {
      background: #f8fafc;
      border-bottom: 2px solid #cbd5e1;
    }
    .premium-report th {
      font-weight: 700;
      text-align: left;
      padding: 10px 16px;
      color: #334155;
    }
    .premium-report td {
      padding: 9px 16px;
      border-bottom: 1px solid #f1f5f9;
      color: #475569;
    }
    .premium-report tr:last-child td { border-bottom: none; }

    .premium-report hr {
      border: none;
      border-top: 2px solid #f1f5f9;
      margin: 30px auto;
      width: 70%;
      border-radius: 2px;
    }

    .premium-report a {
      color: #4f46e5;
      text-decoration: underline;
      text-decoration-color: #c7d2fe;
      text-decoration-thickness: 2px;
      text-underline-offset: 2px;
    }

    /* ---- Footer ---- */
    .report-footer {
      border-top: 1.5px solid #e2e8f0;
      margin-top: 40px;
      padding-top: 16px;
      display: flex;
      justify-content: space-between;
      font-size: 11.5px;
      color: #64748b;
    }
  `}async function $e({elementId:a,filename:o="report.pdf",title:x="AI CMO Report",subtitle:s}){const l=document.getElementById(a);if(!l){console.error(`[pdf] Element #${a} not found.`);return}const u=await ke(),t=new Date().toLocaleDateString("zh-CN"),r=u?`<img src="${u}" alt="logo" />`:"",p=s?`<div class="report-header-sub">${s}</div>`:"",f=`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <title>${x}</title>
  <style>${Re()}</style>
</head>
<body>
  <div class="report-header">
    ${r}
    <div>
      <div class="report-header-title">${x}</div>
      ${p}
      <div class="report-header-sub">Generated by OpenCMO · ${t}</div>
    </div>
  </div>

  <div class="premium-report">
    ${l.innerHTML}
  </div>

  <div class="report-footer">
    <span>OpenCMO — AI-Powered Marketing Intelligence</span>
    <span>${new Date().toISOString().slice(0,10)}</span>
  </div>
</body>
</html>`,d=window.open("","_blank");if(!d){alert("Please allow popups to download the PDF.");return}d.document.write(f),d.document.close(),d.onload=()=>{setTimeout(()=>{d.print()},300)},setTimeout(()=>{d.closed||d.print()},1500)}function U(a){return a?a.replace("T"," ").slice(0,16):"N/A"}function H({label:a,tooltip:o,icon:x,report:s,allowDownload:l,noReportText:u,lowSampleText:t,failedReportText:r}){var g,y,h;const p=x,{t:f}=C(),[d,c]=b.useState(!1),n=!!(s&&s.generation_status==="completed"&&s.content.trim()),i=typeof((g=s==null?void 0:s.meta)==null?void 0:g.llm_error)=="string"?s.meta.llm_error:typeof((y=s==null?void 0:s.meta)==null?void 0:y.pipeline_error)=="string"?s.meta.pipeline_error:null,m=n&&s?s.content.slice(0,200).replace(/\n+/g," "):"";return e.jsxs("div",{className:`rounded-3xl border bg-white shadow-sm transition-all duration-200 ${n?"border-slate-200 hover:border-slate-300 hover:shadow-md cursor-pointer":"border-slate-200"}`,children:[e.jsxs("div",{className:`flex items-center justify-between gap-4 p-6 ${n?"select-none":""}`,onClick:n?()=>c(!d):void 0,children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:`rounded-full p-2.5 ${n?"bg-indigo-50 text-indigo-600":"bg-slate-100 text-slate-400"}`,children:e.jsx(p,{className:"h-4 w-4"})}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-1.5 text-sm font-semibold text-slate-900",children:[a,o&&e.jsxs("span",{className:"group relative",onClick:j=>j.stopPropagation(),children:[e.jsx(ie,{className:"h-3.5 w-3.5 text-slate-400 cursor-help"}),e.jsx("span",{className:"pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-56 -translate-x-1/2 rounded-lg bg-slate-900 px-3 py-2 text-xs font-normal leading-relaxed text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100",children:o})]})]}),s?e.jsxs("div",{className:"text-xs text-slate-500",children:["v",s.version," · ",U(s.created_at)]}):null]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[n&&((h=s==null?void 0:s.meta)!=null&&h.low_sample)?e.jsx("span",{className:"rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-700",children:t}):null,l&&n&&s?e.jsx("button",{type:"button",onClick:j=>{j.stopPropagation(),$e({elementId:`report-content-${s.id}`,filename:`OpenCMO-${a.replace(/\s+/g,"-")}-v${s.version}.pdf`,title:`${a} (v${s.version})`})},className:"rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 focus:outline-none",title:f("reports.downloadPdf"),children:e.jsx(pe,{className:"h-4 w-4"})}):null,n?e.jsx("div",{className:`rounded-full p-1.5 transition-colors ${d?"bg-indigo-100 text-indigo-600":"bg-slate-100 text-slate-400"}`,children:e.jsx(B,{className:`h-4 w-4 transition-transform duration-200 ${d?"rotate-180":""}`})}):null]})]}),n&&!d&&m?e.jsxs("div",{className:"border-t border-slate-100 px-6 py-3 text-sm text-slate-500 cursor-pointer",onClick:()=>c(!0),children:[e.jsxs("p",{className:"line-clamp-2",children:[m,"..."]}),e.jsx("span",{className:"mt-1 inline-block text-xs font-medium text-indigo-500",children:f("reports.clickToExpand")})]}):null,n&&d&&s?e.jsx("div",{className:"border-t border-slate-100 px-6 pb-6 pt-4",children:e.jsx("div",{id:`report-content-${s.id}`,className:"premium-report",children:e.jsx(O,{children:s.content})})}):null,s&&!n?e.jsx("div",{className:"px-6 pb-6",children:e.jsxs("div",{className:"rounded-2xl border border-rose-200 bg-rose-50 px-4 py-5 text-sm text-rose-700",children:[e.jsx("div",{className:"font-semibold",children:r}),i?e.jsx("p",{className:"mt-2 text-xs leading-relaxed text-rose-600",children:i}):null]})}):null,s?null:e.jsx("div",{className:"px-6 pb-6",children:e.jsx("div",{className:"rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-4 py-5 text-sm text-slate-500",children:u})})]})}function q({title:a,reports:o,latestLabel:x,failedLabel:s}){const[l,u]=b.useState(null);return o.length?e.jsxs("div",{className:"rounded-3xl border border-slate-200 bg-white p-6 shadow-sm",children:[e.jsxs("div",{className:"mb-4 flex items-center gap-2 text-sm font-semibold text-slate-900",children:[e.jsx(ae,{className:"h-4 w-4 text-slate-500"}),a]}),e.jsx("div",{className:"space-y-2",children:o.map(t=>{var p,f;const r=l===t.id;return e.jsxs("div",{className:`rounded-2xl border transition-all duration-200 ${r?"border-indigo-200 bg-white shadow-sm":"border-slate-200 bg-slate-50/80 hover:border-slate-300 hover:bg-white hover:shadow-sm"}`,children:[e.jsxs("button",{type:"button",onClick:()=>u(r?null:t.id),className:"flex w-full items-center gap-3 px-4 py-3 text-left cursor-pointer",children:[e.jsx(ne,{className:`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${r?"rotate-90 text-indigo-500":""}`}),e.jsxs("div",{className:"flex flex-1 flex-wrap items-center gap-2 text-sm",children:[e.jsxs("span",{className:"font-semibold text-slate-900",children:["v",t.version," · ",t.audience]}),t.is_latest?e.jsx("span",{className:"rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700",children:x}):null,t.generation_status!=="completed"?e.jsx("span",{className:"rounded-full bg-rose-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-rose-700",children:s}):null,e.jsx("span",{className:"text-slate-500",children:U(t.created_at)})]})]}),r?e.jsx("div",{className:"border-t border-slate-100 px-4 pb-4 pt-3",children:t.generation_status==="completed"&&t.content.trim()?e.jsx("div",{className:"premium-report",children:e.jsx(O,{children:t.content})}):e.jsx("div",{className:"rounded-2xl border border-rose-200 bg-rose-50 px-4 py-4 text-sm text-rose-700",children:((p=t.meta)==null?void 0:p.llm_error)||((f=t.meta)==null?void 0:f.pipeline_error)||s})}):null]},t.id)})})]}):null}function D({title:a,description:o,kind:x,human:s,agent:l,onRegenerate:u,regenerating:t,extraAction:r,regenerateLabel:p,humanLabel:f,humanTip:d,agentLabel:c,agentTip:n,noReportText:i,lowSampleText:m,failedReportText:g}){return e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-col gap-3 rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm lg:flex-row lg:items-end lg:justify-between",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-900",children:a}),e.jsx("p",{className:"mt-1 max-w-3xl text-sm leading-relaxed text-slate-500",children:o})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsxs("button",{type:"button",onClick:()=>u(x),disabled:t,className:"inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50",children:[e.jsx(xe,{className:`h-4 w-4 ${t?"animate-spin":""}`}),p]}),r]})]}),e.jsxs("div",{className:"grid gap-4 xl:grid-cols-2",children:[e.jsx(H,{label:f,tooltip:d,icon:oe,report:s,allowDownload:!0,noReportText:i,lowSampleText:m,failedReportText:g}),e.jsx(H,{label:c,tooltip:n,icon:re,report:l,noReportText:i,lowSampleText:m,failedReportText:g})]})]})}function _e(){var L,S,_,T,z,M;const{id:a}=J(),o=Number(a),x=Q(),s=V(o),l=ve(o),u=ye(o),t=we(o),{t:r}=C(),[p,f]=b.useState(null),[d,c]=b.useState(null),n=s.data,i=l.data??(n==null?void 0:n.latest_reports),m=u.data??[],g=((L=i==null?void 0:i.periodic)==null?void 0:L.human)??null,y=!!(g&&g.generation_status==="completed"&&g.content.trim()),h=b.useMemo(()=>m.filter(N=>N.kind==="strategic"),[m]),j=b.useMemo(()=>m.filter(N=>N.kind==="periodic"),[m]);if(s.isLoading||l.isLoading||u.isLoading)return e.jsx(X,{});const w=s.error instanceof Error&&s.error.message||l.error instanceof Error&&l.error.message||u.error instanceof Error&&u.error.message||t.error instanceof Error&&t.error.message||"";if(!n)return e.jsx(E,{message:r("common.projectNotFound")});const v=async N=>{c(N);try{const W=await R(`/projects/${o}/reports/${N}/regenerate`,{method:"POST"});f(W.task_id)}catch{c(null)}},$=()=>{f(null),c(null),x.invalidateQueries({queryKey:["reports",o]}),x.invalidateQueries({queryKey:["latest-reports",o]}),x.invalidateQueries({queryKey:["project-summary",o]})};return e.jsxs("div",{className:"animate-in fade-in slide-in-from-bottom-4 duration-500",children:[e.jsx(Z,{project:n.project}),e.jsx(ee,{projectId:o}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"rounded-3xl border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f8fafc_45%,#eef2ff_100%)] p-6 shadow-sm",children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"rounded-full bg-slate-900 p-2 text-white",children:e.jsx(te,{className:"h-4 w-4"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-semibold text-slate-900",children:r("reports.title")}),e.jsx("p",{className:"mt-1 max-w-3xl text-sm leading-relaxed text-slate-500",children:r("reports.description")}),w?e.jsx("div",{className:"mt-4",children:e.jsx(E,{message:w})}):null,(S=t.data)!=null&&S.ok?e.jsx("div",{className:"mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700",children:r("reports.emailSent").replace("{{recipient}}",String(t.data.recipient))}):null]})]})}),p&&e.jsx("div",{className:"animate-in fade-in slide-in-from-top-2 duration-300",children:e.jsx(ge,{taskId:p,onComplete:$})}),e.jsx(D,{title:r("reports.strategic"),description:r("reports.strategicDesc"),kind:"strategic",human:((_=i==null?void 0:i.strategic)==null?void 0:_.human)??null,agent:((T=i==null?void 0:i.strategic)==null?void 0:T.agent)??null,onRegenerate:v,regenerating:d==="strategic",regenerateLabel:r("reports.regenerateStrategic"),humanLabel:r("reports.humanReadout"),humanTip:r("reports.humanReadoutTip"),agentLabel:r("reports.agentBrief"),agentTip:r("reports.agentBriefTip"),noReportText:r("reports.noReport"),lowSampleText:r("reports.lowSample"),failedReportText:r("reports.failed")}),e.jsx(D,{title:r("reports.weekly"),description:r("reports.weeklyDesc"),kind:"periodic",human:((z=i==null?void 0:i.periodic)==null?void 0:z.human)??null,agent:((M=i==null?void 0:i.periodic)==null?void 0:M.agent)??null,onRegenerate:v,regenerating:d==="periodic",regenerateLabel:r("reports.regenerateWeekly"),humanLabel:r("reports.humanReadout"),humanTip:r("reports.humanReadoutTip"),agentLabel:r("reports.agentBrief"),agentTip:r("reports.agentBriefTip"),noReportText:r("reports.noReport"),lowSampleText:r("reports.lowSample"),failedReportText:r("reports.failed"),extraAction:e.jsxs("button",{type:"button",onClick:()=>t.mutate(),disabled:t.isPending||!y,className:"inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50",children:[e.jsx(se,{className:"h-4 w-4"}),t.isPending?r("reports.sending"):r("reports.sendEmail")]})}),e.jsxs("div",{className:"grid gap-6 xl:grid-cols-2",children:[e.jsx(q,{title:r("reports.strategicHistory"),reports:h,latestLabel:r("reports.latest"),failedLabel:r("reports.failed")}),e.jsx(q,{title:r("reports.weeklyHistory"),reports:j,latestLabel:r("reports.latest"),failedLabel:r("reports.failed")})]})]})]})}export{_e as ReportsPage};
