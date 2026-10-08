import React from "react";
import { Link } from "react-router-dom";
import {
  FaEye,
  FaBookOpen,
  FaUsers,
  FaAward,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaStar,
  FaBullseye,
  FaSync,
  FaFileAlt,
  FaFolderOpen,
  FaPenNib,
} from "react-icons/fa";

export default function About() {
  const team = [
    {
      id: 1,
      name: "سالم أحمد",
      role: "مؤسس الموقع ومصور محترف",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      socials: { twitter: "#", instagram: "#", linkedin: "#" },
    },
    {
      id: 2,
      name: "محمد علي",
      role: "محرر رئيسي ومصور بورتريه",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      socials: { twitter: "#", instagram: "#", linkedin: "#" },
    },
    {
      id: 3,
      name: "نورة الخالد",
      role: "خبيرة الإضاءة والتعديل",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      socials: { twitter: "#", instagram: "#", linkedin: "#" },
    },
    {
      id: 4,
      name: "هاني الشمري",
      role: "مصور أطعمة ومنتجات",
      image:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=400&fit=crop&crop=face",
      socials: { twitter: "#", instagram: "#", linkedin: "#" },
    },
    {
      id: 5,
      name: "سارة محمد",
      role: "كاتبة ومصورة سفر",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      socials: { twitter: "#", instagram: "#", linkedin: "#" },
    },
    {
      id: 6,
      name: "عبدالله سعد",
      role: "مصور رياضي",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
      socials: { twitter: "#", instagram: "#", linkedin: "#" },
    },
  ];

  const values = [
    {
      title: "الجودة أولاً",
      desc: "نحرص على تقديم محتوى عالي الجودة وموثوق",
      icon: <FaStar />,
    },
    {
      title: "تركيز عملي",
      desc: "نقدم نصائح يمكن تطبيقها فوراً لتحسين صورك",
      icon: <FaBullseye />,
    },
    {
      title: "المجتمع",
      desc: "نبني مجتمعاً داعماً ومحفزاً للمصورين العرب",
      icon: <FaUsers />,
    },
    {
      title: "دائماً محدث",
      desc: "نواكب أحدث التقنيات والأساليب في عالم التصوير",
      icon: <FaSync />,
    },
  ];

  return (
    <div className="pt-20 pb-0">
      {/* Header Section */}
      <section className="text-center mb-20 px-4 pt-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
        <div className="inline-block border border-orange-500/30 bg-orange-500/10 text-orange-500 rounded-full px-4 py-1 mb-6 z-10 relative">
          <span className="text-sm font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span> من نحن
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 z-10 relative">
          مهمتنا هي <span className="gradient-text">الإعلام والإلهام</span>
        </h1>
        <p className="text-neutral-400 max-w-3xl mx-auto text-lg leading-relaxed z-10 relative">
          نحن منصة رائدة متخصصة في فن التصوير الفوتوغرافي، نهدف إلى إثراء
          المحتوى العربي وتقديم أفضل الدروس والنصائح للمصورين من جميع المستويات.
          نشارك معكم أسرار المحترفين وتجاربهم لنسهل عليكم رحلة التعلم والإبداع
          البصري.
        </p>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 px-4 w-full max-w-4xl mx-auto mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="glass-card p-6 flex flex-col items-center justify-center text-center">
            <FaUsers className="text-3xl text-orange-500 mb-3" />
            <div className="text-3xl font-bold gradient-text mb-1">+2مليون</div>
            <div className="text-sm text-neutral-500 font-medium">
              قارئ شهرياً{" "}
            </div>
          </div>
          <div className="glass-card p-6 flex flex-col items-center justify-center text-center">
            <FaFileAlt className="text-3xl text-orange-500 mb-3" />
            <div className="text-3xl font-bold gradient-text mb-1">+500</div>
            <div className="text-sm text-neutral-500 font-medium">
              مقالة منشورة
            </div>
          </div>
          <div className="glass-card p-6 flex flex-col items-center justify-center text-center">
            <FaPenNib className="text-3xl text-orange-500 mb-3" />
            <div className="text-3xl font-bold gradient-text mb-1">+50</div>
            <div className="text-sm text-neutral-500 font-medium">
              كاتب خبير
            </div>
          </div>
          <div className="glass-card p-6 flex flex-col items-center justify-center text-center">
            <FaFolderOpen className="text-3xl text-orange-500 mb-3" />
            <div className="text-3xl font-bold gradient-text mb-1">+15</div>
            <div className="text-sm text-neutral-500 font-medium">تصنيف</div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#0a0a0a] border-y border-[#262626] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              قيمنا
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              المبادئ التي توجه كل ما نقوم بإنشائه
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-[#161616] border border-[#262626] p-8 rounded-2xl hover:border-orange-500 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            تعرف على كتابنا
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            مجموعة من المحترفين والشغوفين بعالم التصوير الذين يشاركون خبراتهم
            معكم.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="glass-card rounded-2xl p-6 text-center group"
            >
              <div className="relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full border-[3px] border-[#262626] group-hover:border-orange-500 transition-colors duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-orange-500 text-xs mb-4 px-2 line-clamp-2">
                {member.role}
              </p>

              <div className="flex justify-center gap-2">
                <a
                  href={member.socials.twitter}
                  className="w-7 h-7 rounded-full bg-[#161616] text-neutral-400 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors text-xs"
                >
                  <FaTwitter />
                </a>
                <a
                  href={member.socials.instagram}
                  className="w-7 h-7 rounded-full bg-[#161616] text-neutral-400 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors text-xs"
                >
                  <FaInstagram />
                </a>
                <a
                  href={member.socials.linkedin}
                  className="w-7 h-7 rounded-full bg-[#161616] text-neutral-400 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors text-xs"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 overflow-hidden bg-orange-600">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            لديك أسئلة؟ دعنا نتحدث!
          </h2>
          <p className="text-orange-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            فريقنا متواجد دائماً للرد على استفساراتك ومساعدتك في رحلتك في عالم
            التصوير.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold shadow-xl hover:bg-neutral-100 transition-colors"
            >
              تواصل معنا
            </a>
            <Link
              to="/blog"
              className="bg-orange-700/50 text-white px-8 py-4 rounded-full font-bold border border-orange-500/30 hover:bg-orange-700 transition-colors backdrop-blur-md"
            >
              تصفح المقالات
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
