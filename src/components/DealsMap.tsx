import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n';

// Fix for default marker icons in Leaflet with Vite
const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

export default function DealsMap() {
  const miamiCenter: [number, number] = [25.7617, -80.1918]; // Downtown Miami
  
  const neighborhoods = [
    { name: "Brickell", coords: [25.7580, -80.1925], deals: 5, color: "#0ea5e9", radius: 800 },
    { name: "South Beach", coords: [25.7826, -80.1340], deals: 3, color: "#0ea5e9", radius: 1000 },
    { name: "Wynwood", coords: [25.8042, -80.1989], deals: 4, color: "#0ea5e9", radius: 700 },
    { name: "Coral Gables", coords: [25.7215, -80.2684], deals: 2, color: "#0ea5e9", radius: 1200 }
  ];

  const exclusiveListings = [
    { title: "Luxury Penthouse", location: "Brickell Ave", price: "$2.5M", coords: [25.7602, -80.1901] },
    { title: "Oceanfront Condo", location: "Collins Ave", price: "$1.8M", coords: [25.7850, -80.1305] },
    { title: "Modern Loft", location: "Wynwood Art District", price: "$950k", coords: [25.8020, -80.1995] }
  ];

  const { t } = useLanguage();

  return (
    <section id="properties" className="py-24 bg-[#0D0F12] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sky-500 font-bold tracking-widest uppercase text-sm mb-3"
          >
            {t('map.label')}
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            {t('map.title')}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 font-light"
          >
            {t('map.desc')}
          </motion.p>
        </div>

        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4 }}
           className="w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative z-10 p-2 bg-[#1A1D23]"
        >
          <div className="w-full h-full rounded-2xl overflow-hidden relative z-0">
            <MapContainer 
              center={miamiCenter} 
              zoom={12} 
              style={{ height: '100%', width: '100%', zIndex: 0 }}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&amp;copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              />
              
              {neighborhoods.map((hood, idx) => (
                <Circle 
                  key={`hood-${idx}`}
                  center={hood.coords as [number, number]}
                  radius={hood.radius}
                  pathOptions={{ fillColor: hood.color, color: hood.color, weight: 1, fillOpacity: 0.2 }}
                >
                  <Popup>
                    <div className="text-slate-900">
                      <h4 className="font-bold text-sm mb-1">{hood.name}</h4>
                      <p className="text-xs">{hood.deals} {t('map.deals')}</p>
                    </div>
                  </Popup>
                </Circle>
              ))}

              {exclusiveListings.map((listing, idx) => (
                <Marker 
                  key={`listing-${idx}`} 
                  position={listing.coords as [number, number]}
                  icon={icon}
                >
                  <Popup>
                    <div className="p-1">
                      <div className="text-[10px] font-bold text-sky-500 uppercase tracking-wider mb-1">{t('map.newDeal')}</div>
                      <h4 className="font-bold text-slate-900 text-base">{listing.title}</h4>
                      <p className="text-slate-500 text-xs mb-2">{listing.location}</p>
                      <p className="text-sm font-bold">{listing.price}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
