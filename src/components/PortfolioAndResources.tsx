import React, { useState, useMemo } from 'react';
import { Search, Calendar, User, Clock, ArrowRight, MapPin, Check, Filter } from 'lucide-react';
import { ARTICLES_AND_EVENTS, SAMPLE_PROJECTS } from '../data';
import { ArticleItem, ProjectItem } from '../types';

export default function PortfolioAndResources() {
  const [activeSubTab, setActiveSubTab] = useState<'resources' | 'portfolio'>('portfolio');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);

  // Categories for Articles & Events
  const resourceCategories = [
    { id: 'all', label: 'All Resources' },
    { id: 'Guide', label: 'Technical Guides' },
    { id: 'Event', label: 'Events & Seminars' },
    { id: 'Company', label: 'Company Updates' }
  ];

  // Categories for Portfolio
  const portfolioCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'solar', label: 'Solar & Renewables' },
    { id: 'networks', label: 'ICT & Networks' },
    { id: 'security', label: 'CCTV & Security' },
    { id: 'hvac', label: 'HVAC & Climate' }
  ];

  // Filtered Articles and Events
  const filteredArticles = useMemo(() => {
    return ARTICLES_AND_EVENTS.filter((article) => {
      const matchesSearch = 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.author.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Filtered Projects
  const filteredProjects = useMemo(() => {
    return SAMPLE_PROJECTS.filter((project) => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleTabChange = (tab: 'resources' | 'portfolio') => {
    setActiveSubTab(tab);
    setSearchQuery('');
    setSelectedCategory('all');
    setActiveArticle(null);
  };

  return (
    <section className="bg-slate-50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8" id="resources-section">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-slate-200 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-[#0E3572] uppercase">
              Page 2 • Project Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Completed Project Portfolio
            </h2>
            <p className="text-gray-500 text-sm sm:text-base">
              Browse photographs and detailed technical specifications of H-Engineers projects deployed in Abuja and beyond.
            </p>
          </div>
        </div>

        {/* Live Search & Filter Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200/60 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={activeSubTab === 'resources' ? "Search articles, events, authors..." : "Search project scope, locations, specifications..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0E3572] focus:ring-1 focus:ring-[#0E3572] text-sm text-slate-800 bg-slate-50/50"
                id="search-input"
              />
            </div>

            {/* Clear button if query exists */}
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="text-xs text-[#0E3572] font-semibold hover:underline"
              >
                Clear Search
              </button>
            )}
          </div>

          {/* Quick Filter Categories */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
            <span className="text-[10px] font-bold text-slate-400 uppercase mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {(activeSubTab === 'resources' ? resourceCategories : portfolioCategories).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#0E3572] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                id={`filter-${cat.id}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content 1: Events & Articles */}
        {activeSubTab === 'resources' && (
          <div className="space-y-10">
            {filteredArticles.length === 0 ? (
              <div className="bg-white text-center py-12 rounded-2xl border border-slate-200 text-gray-500">
                No matching articles or events found. Try adjusting your search query.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <div 
                    key={article.id}
                    id={`article-card-${article.id}`}
                    className="bg-white rounded-2xl border border-gray-150 shadow-xs overflow-hidden hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    {/* Cover image with category badge */}
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      <img 
                        src={article.imageUrl} 
                        alt={article.title} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border text-white ${
                        article.category === 'Event' 
                          ? 'bg-amber-500 border-amber-600' 
                          : article.category === 'Guide'
                            ? 'bg-indigo-600 border-indigo-700'
                            : 'bg-[#0E3572] border-blue-900'
                      }`}>
                        {article.category}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-4 text-xs text-gray-400 font-semibold">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-sky-500" />
                            {article.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-sky-500" />
                            {article.readTime}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 line-clamp-3">
                          {article.excerpt}
                        </p>
                      </div>

                      {/* Author and Read CTA */}
                      <div className="pt-4 border-t border-slate-50/80 flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 text-xs font-bold uppercase">
                            {article.author.charAt(0)}
                          </div>
                          <span className="text-xs font-semibold text-gray-600 truncate max-w-[120px]">
                            {article.author}
                          </span>
                        </div>
                        <button
                          onClick={() => setActiveArticle(article)}
                          id={`read-article-${article.id}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#0E3572] hover:text-blue-900 transition-colors"
                        >
                          Read Full {article.category === 'Event' ? 'Details' : 'Article'}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab content 2: Completed Projects Portfolio (Reflecting the PDF pictures) */}
        {activeSubTab === 'portfolio' && (
          <div className="space-y-10">
            {filteredProjects.length === 0 ? (
              <div className="bg-white text-center py-12 rounded-2xl border border-slate-200 text-gray-500">
                No matching projects found. Try adjusting your search query.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProjects.map((project) => (
                  <div 
                    key={project.id}
                    id={`project-card-${project.id}`}
                    className="bg-white rounded-3xl border border-gray-150 shadow-xs overflow-hidden hover:shadow-md transition-shadow grid grid-cols-1 sm:grid-cols-12"
                  >
                    {/* Project Image */}
                    <div className="sm:col-span-5 h-56 sm:h-auto bg-slate-100 relative">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute bottom-4 left-4 bg-slate-900/85 text-white px-2.5 py-1 rounded-md text-[10px] font-bold font-mono tracking-wider uppercase flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-red-400" />
                        {project.location}
                      </span>
                    </div>

                    {/* Project Data */}
                    <div className="sm:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                      <div className="space-y-3">
                        <span className="inline-block px-2.5 py-0.5 rounded bg-blue-50 text-[10px] font-bold text-[#0E3572] uppercase tracking-widest border border-blue-100">
                          {project.category}
                        </span>
                        <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      {/* Technical Specs Checklist from user's actual photo areas */}
                      <div className="space-y-2 pt-4 border-t border-gray-50 mt-4">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          Commissioned Specs:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] font-semibold text-slate-700">
                          {project.specs.map((spec, index) => (
                            <div key={index} className="flex items-center gap-1.5 bg-slate-50 p-1.5 rounded border border-slate-100">
                              <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                              <span className="truncate">{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Modal for viewing Article/Event contents */}
        {activeArticle && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full relative shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto">
              <button 
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-slate-900 hover:bg-gray-100 transition-colors"
                id="close-article-modal"
              >
                Clear
              </button>

              <div className="space-y-6">
                <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border text-white ${
                  activeArticle.category === 'Event' ? 'bg-amber-500 border-amber-600' : 'bg-indigo-600 border-indigo-700'
                }`}>
                  {activeArticle.category}
                </span>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  {activeArticle.title}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 font-semibold border-y border-slate-100 py-3">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4 text-[#0E3572]" /> Author: {activeArticle.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-[#0E3572]" /> {activeArticle.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-[#0E3572]" /> {activeArticle.readTime}
                  </span>
                </div>

                <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line">
                  {activeArticle.content}
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  <span className="text-xs text-slate-400">
                    {activeArticle.category === 'Event' ? '*Registries are processed on first-come bases.' : 'Share this technical resource.'}
                  </span>
                  <button
                    onClick={() => {
                      setActiveArticle(null);
                      const contactBtn = document.getElementById('nav-contact');
                      if (contactBtn) {
                        (contactBtn as HTMLButtonElement).click();
                        setTimeout(() => {
                          const msgInput = document.getElementById('contact-message') as HTMLTextAreaElement;
                          if (msgInput) msgInput.value = `Hello, I would like to RSVP/Register for: "${activeArticle.title}". Please send details.`;
                        }, 100);
                      }
                    }}
                    className="bg-[#0E3572] hover:bg-blue-900 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all"
                  >
                    {activeArticle.category === 'Event' ? 'RSVP for Event' : 'Ask Question About This'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
