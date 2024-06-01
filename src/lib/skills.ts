//js, ts(typescript), redux{rating=0.8}, test(testing){rating=0.9}

interface ParsedItem {
  name: string;
  options: {
    priority: number;
  };
  wordings: string[];
}


export function parseSkills(text: string): ParsedItem[] {
  const result: ParsedItem[] = [];
  
  // Регулярное выражение для поиска всех возможных вариантов
  const regex = /(\w+)(?:\(([^)]*)\))?(?:\{([^}]*)\})?/g;
  let match;
  
  // Ищем все совпадения в тексте
  while ((match = regex.exec(text)) !== null) {
    const name = match[1];
    const wordings = match[2] ? match[2].split(',').map(word => word.trim()) : null;
    const optionsStr = match[3];
    
    // Преобразуем строку опций в объект
    let options: { [key: string]: number } | null = null;
    if (optionsStr) {
      options = {};
      optionsStr.split(',').forEach(option => {
        const [key, value] = option.split('=').map(str => str.trim());
        options![key] = parseFloat(value);
      });
    }

    result.push({
      name: name,
      options: options,
      wordings: wordings
    });
  }
  
  return result;
}

export function stringifySkills(skills: ParsedItem[]): string {
  return skills?.map(skill => {
    let result = skill.name;
    
    if (skill.wordings && skill.wordings.length > 0) {
      result += `(${skill.wordings.join(', ')})`;
    }
    
    if (skill.options) {
      const optionsStr = Object.entries(skill.options)
        .map(([key, value]) => `${key}=${value}`)
        .join(', ');
      result += `{${optionsStr}}`;
    }
    
    return result;
  }).join(', ');
}
