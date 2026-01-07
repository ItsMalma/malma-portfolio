export type ApiError = {
	message: string;
};

export type ApiSingleResult<T> =
	| {
			data: T;
			errors: null;
	  }
	| {
			data: null;
			errors: ApiError[];
	  };

export type ApiListResult<T> =
	| {
			data: T[];
			errors: null;
			meta: {
				total: number;
			};
	  }
	| {
			data: null;
			errors: ApiError[];
	  };

export type ApiBlog = {
	slug: string;
	title: string;
	content: string;
	published_at: Date;
	last_modified_at: Date;
};
