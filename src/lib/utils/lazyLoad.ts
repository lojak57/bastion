export interface LazyLoadOptions {
	threshold?: number;
	rootMargin?: string;
	fallback?: any;
}

export function createLazyLoader(options: LazyLoadOptions = {}) {
	const { threshold = 0.1, rootMargin = '50px' } = options;
	
	return {
		createIntersectionLoader: (callback: () => void) => {
			let observer: IntersectionObserver;
			
			const observe = (element: HTMLElement) => {
				if (!observer) {
					observer = new IntersectionObserver(
						(entries) => {
							entries.forEach(entry => {
								if (entry.isIntersecting) {
									callback();
									observer.unobserve(entry.target);
								}
							});
						},
						{ threshold, rootMargin }
					);
				}
				observer.observe(element);
			};
			
			const disconnect = () => {
				if (observer) {
					observer.disconnect();
				}
			};
			
			return { observe, disconnect };
		},
		
		createTriggerLoader: (callback: () => Promise<void>) => {
			let isLoading = false;
			let component: any = null;
			
			const load = async () => {
				if (isLoading || component) return component;
				
				isLoading = true;
				try {
					await callback();
					return component;
				} finally {
					isLoading = false;
				}
			};
			
			const setComponent = (comp: any) => {
				component = comp;
			};
			
			return { load, setComponent, get component() { return component; } };
		}
	};
}

export function lazyImport<T = any>(importFn: () => Promise<{ default: T }>): Promise<T> {
	return importFn().then(module => module.default);
}