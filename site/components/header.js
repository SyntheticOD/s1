import Bubbles from '../components/Bubbles'
import Link from 'next/link'
import { useRouter } from "next/router";
import { NotificationManager } from 'react-notifications';

export default function Header({ searchText, changeSearch }) {

  const copyToClipboard = () => {
    var textField = document.createElement('textarea')
    textField.innerText = listUrl
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
    NotificationManager.info('URL successfully copied to clipboard', 'Copy URL', 4000);
  }
  const listUrl = process.env.listUrl;
  const router = useRouter();

  return (
    <header className="relative font-light overflow-hidden bg-gradient-to-tr from-[#5b2e91] to-[#ff4f97] p-8 xl:px-32 text-white gap-5 md:gap-0 flex flex-wrap justify-center items-center">
      <Bubbles />
      <div className='relative z-10'>
        <div className="text-3xl">
        <svg className="inline-block fill-current h-10 w-auto mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Your_design" x="0px" y="0px" viewBox="0 0 4502.5 594.8" style="enable-background:new 0 0 4502.5 594.8;" xml:space="preserve">

<g>
	<path className="st0" d="M850.1,97h79.7v400.8h-79.7V97z"></path>
	<path className="st0" d="M1015.9,97.6h84.5v71.8h-84.5V97.6z M1018.5,204.2h79.7v293.6h-79.7V204.2z"></path>
	<path className="st0" d="M1182.7,204.2h80.3v42.2c18-24.8,45.4-47.5,87.1-47.5c63.9,0,100.9,41.2,100.9,109.3v189.6h-80.3V333.6   c0-40.7-19-62.3-52.8-62.3c-33.8,0-54.9,21.6-54.9,62.3v164.2h-80.3L1182.7,204.2L1182.7,204.2z"></path>
	<path className="st0" d="M1526.4,393.8V204.2h79.7v164.2c0,40.7,19,62.3,52.8,62.3c33.8,0,54.9-21.6,54.9-62.3V204.2h80.3v293.6h-80.3   v-42.2c-19.5,25.3-44.4,48-87.1,48C1562.8,503.6,1526.4,461.9,1526.4,393.8z"></path>
	<path className="st0" d="M1996.8,292.4l58.1-88.2h84L2039,347.3l104,150.5H2057l-61.8-94.5l-61.8,94.5h-84l104-149.4l-99.8-144.1h86.1   L1996.8,292.4z"></path>
	<path className="st0" d="M2164.2,459.3l34.8-53.3c31.7,23.2,65.5,35.4,92.9,35.4c25.3,0,37.5-9.5,37.5-23.8v-1.1   c0-18.5-29-25.3-61.8-35.4c-42.2-12.7-88.7-30.6-88.7-87.6v-1.1c0-59.1,48-92.4,107.2-92.4c37.5,0,77.1,12.7,108.8,33.8l-30.6,55.5   c-29.6-16.9-57.6-27.5-80.3-27.5c-21.1,0-32.7,9.5-32.7,22.2v1.1c0,17.4,29,25.3,61.2,36.4c40.7,12.7,89.2,33.3,89.2,86.6v1.1   c0,64.9-49.1,94-111.9,94C2248.1,503.1,2202.7,489.3,2164.2,459.3z"></path>
	<path className="st0" d="M2452.9,352.6v-1.1c0-84,59.7-152.6,144.7-152.6c97.2,0,142.6,76,142.6,158.9c0,6.3-0.5,13.2-1.1,21.1h-206.5   c7.9,40.1,35.4,60.7,73.9,60.7c29.6,0,49.6-9,72.9-30.6l45.9,40.7c-27.5,33.8-66.5,54.4-119.9,54.4   C2518.4,504.1,2452.9,442.4,2452.9,352.6z M2662,328.8c-5.8-38.5-26.9-65.5-64.4-65.5c-35.9,0-59.7,25.3-66,65.5H2662z"></path>
	<path className="st0" d="M2807.2,204.2h80.3v60.7c17.4-41.7,45.4-68.1,95.6-66v84h-4.2c-56.5,0-91.3,33.8-91.3,105.6v109.3h-80.3V204.2   z"></path>
	<path className="st0" d="M3014.1,204.2h85l68.1,200.6l69.2-200.6h83.4l-116.7,295.7h-72.3L3014.1,204.2z"></path>
	<path className="st0" d="M3343,352.6v-1.1c0-84,59.7-152.6,144.7-152.6c97.2,0,142.6,76,142.6,158.9c0,6.3-0.5,13.2-1.1,21.1h-206.4   c7.9,40.1,35.4,60.7,73.9,60.7c29.6,0,49.6-9,72.9-30.6l45.9,40.7c-27.5,33.8-66.5,54.4-119.9,54.4   C3408.5,504.1,3343,442.4,3343,352.6z M3552.1,328.8c-5.8-38.5-26.9-65.5-64.4-65.5c-35.9,0-59.7,25.3-66,65.5H3552.1z"></path>
	<path className="st0" d="M3697.3,204.2h80.3v60.7c17.4-41.7,45.4-68.1,95.6-66v84h-4.2c-56.5,0-91.3,33.8-91.3,105.6v109.3h-80.3V204.2   z"></path>
	<path className="st0" d="M3877.9,412.3h85.5v85.5h-85.5V412.3z"></path>
	<path className="st0" d="M4042,97.6h84.5v71.8H4042V97.6z M4044.7,204.2h79.7v293.6h-79.7V204.2z"></path>
	<path className="st0" d="M4194.6,352.6v-1.1c0-84,67.6-152.6,158.9-152.6c90.3,0,157.4,67.6,157.4,151.5v1.1   c0,84.5-67.6,152.6-158.9,152.6C4261.7,504.1,4194.6,437.1,4194.6,352.6z M4431.7,352.6v-1.1c0-44.9-32.2-83.4-79.7-83.4   c-48.6,0-78.1,37.5-78.1,82.4v1.1c0,44.9,32.2,84,79.7,84C4402.1,435.5,4431.7,397.5,4431.7,352.6z"></path>
</g>
<g>
	<g>
		
			<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="287.9773" y1="223.4099" x2="194.3088" y2="330.0195" gradientTransform="matrix(1 0 0 -1 0 596)">
			<stop offset="0" style="stop-color:#6051A2"></stop>
			<stop offset="1" style="stop-color:#4678BC"></stop>
		</linearGradient>
		<path className="st1" d="M296.6,313.9V333c0,9.2-7.5,16.7-16.7,16.7h-64.8c-9.2,0-16.7-7.5-16.7-16.7v-64.8c0-9.2,7.5-16.7,16.7-16.7    h25.7c-0.5,4.5,0.4,9.3,3.1,14.1C259.1,285.6,277,301.6,296.6,313.9z"></path>
		
			<linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="379.9424" y1="304.2099" x2="286.2706" y2="410.8232" gradientTransform="matrix(1 0 0 -1 0 596)">
			<stop offset="0" style="stop-color:#6051A2"></stop>
			<stop offset="1" style="stop-color:#4678BC"></stop>
		</linearGradient>
		<path className="st2" d="M345.7,165.3V230c0,9.2-7.5,16.7-16.7,16.7h-32.1c-4.6-3.1-9.2-6.6-13.7-10.3c0.1,0.1,0.2,0.2,0.3,0.3    c-1.2-1-2.4-2-3.6-3.1c0.6,0.4,1.1,0.8,1.6,1.3c-10.5-9.1-24.2-6.5-32.8,1.4c-0.8-1.9-1.2-4.1-1.2-6.3v-64.8    c0-9.2,7.5-16.7,16.7-16.7H329C338.2,148.6,345.7,156.1,345.7,165.3z"></path>
		
			<linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="352.9139" y1="254.8119" x2="292.8837" y2="323.1358" gradientTransform="matrix(1 0 0 -1 0 596)">
			<stop offset="0" style="stop-color:#6051A2"></stop>
			<stop offset="1" style="stop-color:#4678BC"></stop>
		</linearGradient>
		<path className="st3" d="M307.6,320.3c28.7,15.6,60.5,23.8,92.6,25.1c-3,2.6-6.9,4.2-11.1,4.2h-64.8c-9.2,0-16.7-7.5-16.7-16.7    L307.6,320.3L307.6,320.3z"></path>
		
			<linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="364.9377" y1="330.4025" x2="310.2249" y2="392.6743" gradientTransform="matrix(1 0 0 -1 0 596)">
			<stop offset="0" style="stop-color:#6051A2"></stop>
			<stop offset="1" style="stop-color:#4678BC"></stop>
		</linearGradient>
		<path className="st4" d="M405.7,268.2v3.3c-30,5.1-62.1,1.1-93-15.2c3-2.9,7.1-4.7,11.6-4.7H389C398.3,251.5,405.7,259,405.7,268.2z"></path>
	</g>
	
		<linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="89.6105" y1="618.9019" x2="67.5901" y2="155.1788" gradientTransform="matrix(1 0 0 -1 0 596)">
		<stop offset="0.4293" style="stop-color:#EF5C9C"></stop>
		<stop offset="0.6263" style="stop-color:#D5499A"></stop>
		<stop offset="0.9945" style="stop-color:#422E83"></stop>
	</linearGradient>
	<path className="st5" d="M52.3,203.3c-2.1,13.1-3.2,26.3-3.4,39.5c0,4.1,0.1,8.2,0.3,12.3c0,0,0,0,0,0.1c0.3,8.8,1.2,17.6,2.7,26.4   c0,0.1,0,0.1,0.1,0.2c1.2,7.5,2.6,14.9,4.5,22.2c0.3,1.1,0.5,2.2,0.7,3.3c0,0.1,0,0.2,0.1,0.3c3.8,18.2,5.5,37.1,5.1,55.9   c-0.3,14.6-1.8,29.3-4.6,43.5c-2.4,12.4-5.8,24.6-10,36.5C-49.5,299,8.1,78.4,164.1,0C101.3,44.6,66.8,116.5,54.2,191.1   C53.5,195.2,52.9,199.2,52.3,203.3z"></path>
	
		<linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="110.089" y1="583.462" x2="130.8141" y2="74.4029" gradientTransform="matrix(1 0 0 -1 0 596)">
		<stop offset="0.4293" style="stop-color:#EF5C9C"></stop>
		<stop offset="0.6263" style="stop-color:#D5499A"></stop>
		<stop offset="0.9945" style="stop-color:#422E83"></stop>
	</linearGradient>
	<path className="st6" d="M207.6,450.8c0.1,37-8.4,74.6-23.9,107.2h0c-0.6,1.2-1.1,2.4-1.7,3.5C126.6,536,80,494.7,47.7,443.5   c4.3-11.8,7.6-24.1,10-36.5c2.8-14.3,4.3-28.9,4.6-43.5c0.4-18.8-1.3-37.6-5.1-55.9c0-0.1,0-0.2-0.1-0.3c-0.2-1.1-0.5-2.2-0.7-3.3   c-1.8-7.3-3.3-14.8-4.5-22.2c0-0.1,0-0.1-0.1-0.2c-1.5-8.8-2.3-17.6-2.7-26.4c0,0,0,0,0-0.1c-0.2-4.1-0.3-8.2-0.3-12.3   c0.2-13.2,1.3-26.4,3.4-39.5c5.7-35.6,18.3-70.1,38.8-99.9c16-23.6,52.7,0.2,36.8,24.5v0c-20.3,33.8-30.3,76.7-26.2,118   c50.7,35.4,87.5,91.6,100.5,152.9c0,0,0,0,0.1,0C205.9,415.8,207.7,433.2,207.6,450.8z"></path>
	
		<linearGradient id="SVGID_7_" gradientUnits="userSpaceOnUse" x1="711.8789" y1="341.8361" x2="265.3489" y2="23.1956" gradientTransform="matrix(1 0 0 -1 0 596)">
		<stop offset="0.4293" style="stop-color:#EF5C9C"></stop>
		<stop offset="0.6263" style="stop-color:#D5499A"></stop>
		<stop offset="0.9945" style="stop-color:#422E83"></stop>
	</linearGradient>
	<path className="st7" d="M183.7,558c296.7,57.8,435.1-319,434.8-358.3C688.4,448.7,410.7,675.3,182,561.6   C182.5,560.4,183.1,559.2,183.7,558z"></path>
	
		<linearGradient id="SVGID_8_" gradientUnits="userSpaceOnUse" x1="717.1183" y1="434.3129" x2="183.0083" y2="52.1057" gradientTransform="matrix(1 0 0 -1 0 596)">
		<stop offset="0.4293" style="stop-color:#EF5C9C"></stop>
		<stop offset="0.6263" style="stop-color:#D5499A"></stop>
		<stop offset="0.9945" style="stop-color:#422E83"></stop>
	</linearGradient>
	<path className="st8" d="M618.5,199.8c0.3,39.3-138.1,416-434.8,358.3c23-48.2,30-106.5,18.6-159.3c1.7,1,3.4,2,5.1,2.9   c0.9,0.5,1.8,1,2.7,1.4c2.6,1.3,5.2,2.6,7.9,3.8c1,0.4,2,0.9,2.9,1.3c79.7,34,184,4.4,232.5-65.5c0.4-0.5,0.7-1,1-1.5v0   c73.3-14.6,139.6-64.8,163.3-144.5C618,197.7,618.3,198.7,618.5,199.8z"></path>
	
		<linearGradient id="SVGID_9_" gradientUnits="userSpaceOnUse" x1="176.8614" y1="199.8705" x2="535.8287" y2="271.9994" gradientTransform="matrix(1 0 0 -1 0 596)">
		<stop offset="0.4293" style="stop-color:#EF5C9C"></stop>
		<stop offset="0.6263" style="stop-color:#D5499A"></stop>
		<stop offset="0.9945" style="stop-color:#422E83"></stop>
	</linearGradient>
	<path className="st9" d="M454.4,341.1L454.4,341.1c-0.4,0.5-0.7,1-1,1.5c-48.5,70-152.8,99.6-232.5,65.5c-1-0.4-2-0.9-2.9-1.3   c-2.6-1.2-5.3-2.5-7.9-3.8c-0.9-0.5-1.8-1-2.7-1.4c-1.7-0.9-3.4-1.9-5.1-2.9c-4.3-19.7-11-39.2-19.7-57.2   C264.2,370,370.2,357.1,454.4,341.1z"></path>
	
		<linearGradient id="SVGID_10_" gradientUnits="userSpaceOnUse" x1="686.0141" y1="487.5089" x2="264.9823" y2="308.0254" gradientTransform="matrix(1 0 0 -1 0 596)">
		<stop offset="0.4293" style="stop-color:#EF5C9C"></stop>
		<stop offset="0.6263" style="stop-color:#D5499A"></stop>
		<stop offset="0.9945" style="stop-color:#422E83"></stop>
	</linearGradient>
	<path className="st10" d="M617.7,196.6c-47.8,161.6-271.9,202.5-373.8,69c-13.2-24,17.9-47.8,37.6-30.8c-0.5-0.4-1.1-0.9-1.6-1.3   c1.2,1.1,2.4,2.1,3.6,3.1c-0.1-0.1-0.2-0.2-0.3-0.3c59.8,49.6,129,45.2,180.6,12.5c37.1-23.5,65.1-61.7,74-105   c0.6-3.1,1-6.2,1.3-9.4c0.7-6.1,1.3-12,1.7-17.9c0.3-25.1-5.9-51.2-20.4-76.6c0,0,0,0,0-0.1C567.4,80.2,601.5,135.3,617.7,196.6z"></path>
	
		<linearGradient id="SVGID_11_" gradientUnits="userSpaceOnUse" x1="253.1573" y1="599.4448" x2="670.6254" y2="435.1021" gradientTransform="matrix(1 0 0 -1 0 596)">
		<stop offset="0.4293" style="stop-color:#EF5C9C"></stop>
		<stop offset="0.6263" style="stop-color:#D5499A"></stop>
		<stop offset="0.9945" style="stop-color:#422E83"></stop>
	</linearGradient>
	<path className="st11" d="M520.3,40C487.9,10.2,411.1-2.2,357.5,9.7c-1.4,0.3-2.7,0.9-3.9,1.7c-17.5,11.4-38.9,15.6-59.4,19.4   c-4.3,0.8-7.5,4.5-7.6,8.9c-0.3,9.2,4.8,20,8.2,27.2c8.7,16.9,24.3,26.8,42.7,29.1c49.1-73.9,129.2-40.6,179.5,11.7   c1.2,1.2,2.3,2.5,3.5,3.7c6.9,7.5,13.1,15.2,18.6,23.1l0.1,0c0.7-6.1,1.3-12,1.7-17.9C541.1,91.5,534.9,65.4,520.3,40z M368,45.1   c-12.5-0.9-12.5-13.1,0-13.9C380.5,32,380.5,44.2,368,45.1z M455.5,43.8c-4.4,2.2-9.5,3.7-14.3,4.4c-12.4,1.7-0.9-6.5-2-14.5   c-1.1-8-14.4-12.8-2-14.5c2.7-0.4,5.6-0.4,8.4-0.2c10.4,0.8,20.5,5.4,21.4,11.7C467.6,35.5,462.4,40.4,455.5,43.8z"></path>
	
		<linearGradient id="SVGID_12_" gradientUnits="userSpaceOnUse" x1="228.5988" y1="570.6418" x2="555.6952" y2="386.1259" gradientTransform="matrix(1 0 0 -1 0 596)">
		<stop offset="0.4293" style="stop-color:#EF5C9C"></stop>
		<stop offset="0.6263" style="stop-color:#D5499A"></stop>
		<stop offset="0.9945" style="stop-color:#422E83"></stop>
	</linearGradient>
	<path className="st12" d="M539.1,134.5c-0.3,3.2-0.8,6.3-1.3,9.4c-8.9,43.3-36.9,81.5-74,105c-6.1-72-58.5-133.5-126.3-152.9   c49.1-73.9,129.2-40.6,179.5,11.7c1.2,1.2,2.3,2.5,3.5,3.7C527.3,118.8,533.6,126.6,539.1,134.5L539.1,134.5z"></path>
</g>
</svg>
        </div>
        <div className="text-sm uppercase w-full flex justify-between">
          <span className='opacity-70'>W</span>
          <span className='opacity-70'>o</span>
          <span className='opacity-70'>r</span>
          <span className='opacity-70'>k</span>
          <span className='opacity-70'>s</span>
          <span className='opacity-70'>p</span>
          <span className='opacity-70'>a</span>
          <span className='opacity-70'>c</span>
          <span className='opacity-70'>e</span>
          <span>&nbsp;</span>
          <span className='opacity-40'>R</span>
          <span className='opacity-40'>e</span>
          <span className='opacity-40'>g</span>
          <span className='opacity-40'>i</span>
          <span className='opacity-40'>s</span>
          <span className='opacity-40'>t</span>
          <span className='opacity-40'>r</span>
          <span className='opacity-40'>y</span>
        </div>
      </div>
      <nav className='relative z-10 mx-12'>
        <a href="/" className={'p-4 inline-block rounded-full border border-solid' + (router.pathname == "/" ? ' border-white/30' : ' border-transparent')}>Library</a>
        <Link href="/new" className={'p-4 inline-block rounded-full border border-solid' + (router.pathname.startsWith("/new") ? ' bg-black/10 border-white/30' : ' border-transparent')}>New</Link>
      </nav>
      <div className="grow flex justify-center relative z-10">
        <div className='bg-black/10 shadow border border-1 border-white/30 rounded flex w-full max-w-md'>
          <input
            name="search"
            className='bg-transparent shadow-inner text-lg font-light w-full p-4 placeholder:text-white/40'
            placeholder='Search for workspace'
            type="text"
            value={searchText}
            onChange={changeSearch}
          />

        </div>

      </div>
      <button className='p-4 relative z-10 px-5 bg-[#5b2e91]/70 border-t border-white/20 border-solid hover:bg-slate-900 transition shadow-lg m-2 rounded items-center text-white/70 flex cursor-pointer' onClick={() => { copyToClipboard() }}>
        <span className="mr-3">Workspace Registry Link</span>
        <svg style={{ height: '14px', fill: '#fff' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z" /></svg>
      </button>
    </header >

  )
}