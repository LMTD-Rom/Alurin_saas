'use client';

import { motion } from 'framer-motion';

const brands = [
  {
    name: 'WhatsApp Business',
    category: 'Messaging',
    color: '#25D366',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
    )
  },
  {
    name: 'Google Sheets',
    category: 'Spreadsheets',
    color: '#0F9D58',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H6v-2h3v2zm0-4H6v-2h3v2zm0-4H6V7h3v2zm5 8h-3v-2h3v2zm0-4h-3v-2h3v2zm0-4h-3V7h3v2zm5 8h-3v-2h3v2zm0-4h-3v-2h3v2zm0-4h-3V7h3v2z"/>
      </svg>
    )
  },
  {
    name: 'Slack Connect',
    category: 'Communication',
    color: '#4A154B',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
      </svg>
    )
  },
  {
    name: 'Notion Workspace',
    category: 'Documentation',
    color: '#000000',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.83c-.467-.373-.98-.606-2.054-.513L2.686 2.39c-.374.047-.467.28-.327.466l2.1 1.352zm-.513 4.293v12.41c0 .7.373.98 1.167.933l13.914-.84c.793-.046.98-.513.98-1.12V4.815c0-.606-.233-.886-.793-.84l-14.475.887c-.56.046-.793.326-.793.933zm11.71 1.773c.047.373-.14.747-.56.793l-.7.094v7.792c-.373.233-.793.373-1.213.373-.653 0-.98-.28-1.54-.933l-3.5-5.365v5.178l1.353.28c.047.373-.14.746-.56.793l-3.36.233c-.047-.373.14-.746.56-.793l.886-.187V10.28l-.98-.093c-.046-.374.14-.747.56-.793l3.5-.234 3.78 5.693V10.09l-1.074-.14c-.046-.373.14-.746.56-.793l3.36-.233z"/>
      </svg>
    )
  },
  {
    name: 'Telegram Bot',
    category: 'Automation',
    color: '#24A1DE',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.943z"/>
      </svg>
    )
  },
  {
    name: 'Google Drive Sync',
    category: 'Cloud Storage',
    color: '#4285F4',
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.01 1.485L7.054 10.07h9.913l4.956-8.585H12.01zm-5.9 10.218L1.155 20.29h9.913l4.956-8.587H6.11zm11.83 0l-4.956 8.587h9.913l4.956-8.587h-9.913z"/>
      </svg>
    )
  }
];

export default function LogoMarquee() {
  const marqueeItems = [...brands, ...brands, ...brands];

  return (
    <section className="py-16 lg:py-20 overflow-hidden relative border-y border-gray-100 bg-white/40 backdrop-blur-md">
      <div className="max-w-[1120px] mx-auto px-6 mb-10 text-center">
        <p className="text-[12px] font-bold uppercase tracking-widest text-blue-600 mb-2">Ekosistem Terintegrasi</p>
        <h2 className="text-[24px] lg:text-[34px] font-bold text-navy-900 tracking-tight">
          Bekerja Bersama <span className="text-blue-600">Aplikasi</span> Favorit Anda
        </h2>
        <p className="text-[14px] text-gray-500 mt-2 max-w-[600px] mx-auto">
          Sambungkan notifikasi chat, pencadangan file, dan alur data tanpa perlu migrasi tools yang ada.
        </p>
      </div>

      <div className="relative w-full overflow-hidden mask-gradient">
        {/* Left & Right gradient blurs */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-page to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-page to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-4 lg:gap-6 w-max py-2 will-change-transform transform-gpu"
          animate={{ x: ['0%', '-33.333%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {marqueeItems.map((brand, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-6 py-4 bg-white rounded-2xl border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-strong hover:-translate-y-1 transition-all duration-300 shrink-0 group"
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${brand.color}15`, color: brand.color }}
              >
                {brand.svg}
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-navy-900 whitespace-nowrap group-hover:text-blue-600 transition-colors">
                  {brand.name}
                </span>
                <span className="text-[11px] text-gray-400 font-medium">
                  {brand.category}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}