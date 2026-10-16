'use client';

import React, { useState, useMemo } from 'react';
import { FaqItem } from '@/lib/projectFaqs';

interface SearchableFaqProps {
  items: FaqItem[];
  theme?: 'light' | 'dark';
  accentColor?: string;
  title?: string;
  eyebrow?: string;
  projectName?: string;
}

export function SearchableFaq({
  items,
  theme = 'dark',
  accentColor = 'text-blue-500',
  title = 'Frequently Asked Questions',
  eyebrow = 'FAQ · SEARCHABLE KNOWLEDGE',
  projectName = 'Project'
}: SearchableFaqProps) {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openIndices, setOpenIndices] = useState<number[]>([0]); // First item open by default

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set<string>();
    items.forEach((item) => {
      if (item.category) cats.add(item.category);
    });
    return Array.from(cats);
  }, [items]);

  // Filter items based on search query and category
  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        (item.category && item.category.toLowerCase().includes(q))
      );
    });
  }, [items, query, selectedCategory]);

  const toggleItem = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const isLight = theme === 'light';

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b pb-6 mb-8 border-neutral-200 dark:border-neutral-800">
        <div>
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase font-mono block mb-2 text-neutral-500">
            {eyebrow}
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${isLight ? 'text-neutral-900' : 'text-white'}`}>
            {title}
          </h2>
        </div>
        <div className="text-xs font-mono text-neutral-500">
          Showing {filteredItems.length} of {items.length} questions
        </div>
      </div>

      {/* Search Input Bar */}
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search questions about ${projectName} (e.g. architecture, latency, privacy, licensing)...`}
          className={`w-full pl-10 pr-10 py-3.5 text-sm rounded-xl border transition-all outline-none ${
            isLight
              ? 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:bg-white focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900'
              : 'bg-neutral-900/80 border-neutral-800 text-white placeholder-neutral-500 focus:bg-neutral-900 focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600'
          }`}
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 text-xs font-mono"
            aria-label="Clear search query"
          >
            Clear
          </button>
        )}
      </div>

      {/* Category Filter Pills (if categories available) */}
      {categories.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              selectedCategory === 'all'
                ? isLight
                  ? 'bg-neutral-900 text-white'
                  : 'bg-white text-neutral-950 font-bold'
                : isLight
                ? 'bg-neutral-100 hover:bg-neutral-200 text-neutral-600'
                : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-400'
            }`}
          >
            All Questions ({items.length})
          </button>
          {categories.map((cat) => {
            const count = items.filter((i) => i.category === cat).length;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  isSelected
                    ? isLight
                      ? 'bg-neutral-900 text-white'
                      : 'bg-white text-neutral-950 font-bold'
                    : isLight
                    ? 'bg-neutral-100 hover:bg-neutral-200 text-neutral-600'
                    : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-400'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      )}

      {/* FAQ Accordion List */}
      {filteredItems.length === 0 ? (
        <div className={`p-8 text-center rounded-2xl border ${isLight ? 'bg-neutral-50 border-neutral-200 text-neutral-600' : 'bg-neutral-900/50 border-neutral-800 text-neutral-400'}`}>
          <p className="text-sm font-medium mb-2">No matching questions found for &quot;{query}&quot;</p>
          <p className="text-xs text-neutral-500 mb-4">Try searching for a different keyword or reset the search.</p>
          <button
            onClick={() => {
              setQuery('');
              setSelectedCategory('all');
            }}
            className={`px-4 py-2 rounded-lg text-xs font-semibold ${isLight ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-950'}`}
          >
            Reset Search
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredItems.map((item, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isLight
                    ? isOpen
                      ? 'bg-white border-neutral-300 shadow-xs'
                      : 'bg-neutral-50/60 border-neutral-200/80 hover:bg-neutral-50'
                    : isOpen
                    ? 'bg-neutral-900/90 border-neutral-700 shadow-sm'
                    : 'bg-neutral-900/40 border-neutral-800/80 hover:bg-neutral-900/60'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    {item.category && (
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block ${accentColor}`}>
                        {item.category}
                      </span>
                    )}
                    <h3 className={`text-base sm:text-lg font-bold tracking-tight ${isLight ? 'text-neutral-900' : 'text-white'}`}>
                      {item.question}
                    </h3>
                  </div>
                  <div
                    className={`shrink-0 mt-1 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    } ${isLight ? 'bg-neutral-100 text-neutral-600' : 'bg-neutral-800 text-neutral-300'}`}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                    <p className={`text-sm sm:text-base leading-relaxed border-t pt-4 ${
                      isLight ? 'text-neutral-600 border-neutral-100' : 'text-neutral-300 border-neutral-800/80'
                    }`}>
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
